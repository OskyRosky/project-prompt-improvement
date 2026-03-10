# PromptLab Academy — Guía de Despliegue

## Índice
1. [Estructura del proyecto](#estructura)
2. [Paso 1 — Docker Desktop (local)](#docker-desktop)
3. [Paso 2 — Exportar imagen `.tar`](#exportar-tar)
4. [Paso 3 — QNAP NAS (Container Station)](#qnap)
5. [Paso 4 — AWS ECS + Fargate](#aws-ecs)
6. [Referencia de variables y puertos](#referencia)

---

## Estructura del proyecto {#estructura}

```
React-Claude/
├── src/
│   ├── main.jsx          ← Entry point de React
│   └── App.jsx           ← Toda la aplicación (PromptLab Academy)
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── package.json
├── Dockerfile            ← Monolítico: node:20-alpine construye y sirve
├── docker-compose.yml    ← Para pruebas locales con Docker Desktop
├── .dockerignore
└── DEPLOYMENT.md         ← Este archivo
```

> **Arquitectura monolítica:** Una sola imagen basada en `node:20-alpine`.
> Vite compila el bundle y `serve` lo expone en el puerto 8080.
> Sin nginx, sin multi-stage. Simple y portable.

---

## Paso 1 — Docker Desktop (local) {#docker-desktop}

### Requisitos
- Docker Desktop instalado y corriendo (Mac, Windows o Linux)
- Arquitectura: **amd64/x86_64** (el Dockerfile ya tiene `--platform=linux/amd64`)

### Construir y levantar

```bash
# Desde la carpeta React-Claude/
cd /path/to/React-Claude

# Opción A — Con docker-compose (recomendado)
docker compose up --build

# Opción B — Comandos manuales
docker build --platform linux/amd64 -t promptlab-academy:latest .
docker run -d -p 8080:8080 --name promptlab-academy promptlab-academy:latest
```

### Verificar que funciona

```bash
# Health check (HTTP 200 = OK)
curl -o /dev/null -s -w "%{http_code}\n" http://localhost:8080
# Debe responder: 200

# Abrir en el browser
open http://localhost:8080
```

### Logs y troubleshooting

```bash
# Ver logs en tiempo real
docker logs -f promptlab-academy

# Entrar al contenedor
docker exec -it promptlab-academy sh

# Ver estado del contenedor
docker ps
docker inspect promptlab-academy
```

### Detener y limpiar

```bash
docker compose down

# O manualmente
docker stop promptlab-academy
docker rm promptlab-academy
```

---

## Paso 2 — Exportar imagen `.tar` {#exportar-tar}

Una vez verificado en Docker Desktop, exporta la imagen para llevarla a QNAP o a ECR.

```bash
# Asegúrate de tener la imagen construida
docker images | grep promptlab-academy

# Exportar como .tar (puede tardar ~30 segundos)
docker save promptlab-academy:latest -o promptlab-academy.tar

# Verificar tamaño (debería ser ~50-80 MB)
ls -lh promptlab-academy.tar
```

---

## Paso 3 — QNAP NAS (Container Station) {#qnap}

### Requisitos
- QNAP con Container Station instalado (QTS 5.x)
- Acceso SSH o File Station al NAS

### 3.1 Subir el .tar al NAS

```bash
# Opción A — SCP desde tu Mac/PC
scp promptlab-academy.tar admin@<IP_QNAP>:/share/Container/

# Opción B — Arrastrarlo via File Station en la interfaz web del QNAP
# Ruta sugerida: /share/Container/
```

### 3.2 Importar la imagen en Container Station

1. Abre **Container Station** en la interfaz web del QNAP
2. Ve a **Images → Import**
3. Selecciona el archivo `promptlab-academy.tar`
4. Espera a que aparezca `promptlab-academy:latest` en la lista

### 3.3 Crear el contenedor

1. Ve a **Containers → Create**
2. Selecciona imagen: `promptlab-academy:latest`
3. Configura:
   - **Container name:** `promptlab-academy`
   - **Port mapping:** `8080` → `8080` (o el puerto que prefieras externamente)
   - **Restart policy:** `Unless stopped`
4. Click **Create**

### 3.4 Verificar

```
http://<IP_QNAP>:8080
# HTTP 200 = contenedor funcionando correctamente
```

> **Nota:** Si tienes el firewall del QNAP activo, abre el puerto 8080 en
> Control Panel → Security → Firewall.

---

## Paso 4 — AWS ECS + Fargate {#aws-ecs}

### Requisitos
- AWS CLI configurado (`aws configure`)
- Cuenta con permisos: ECR, ECS, IAM, VPC
- Región destino: ej. `us-east-1`

### 4.1 Crear repositorio en ECR

```bash
REGION=us-east-1
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REPO_NAME=promptlab-academy

# Crear repositorio
aws ecr create-repository \
  --repository-name $REPO_NAME \
  --region $REGION \
  --image-scanning-configuration scanOnPush=true

# Login a ECR
aws ecr get-login-password --region $REGION | \
  docker login --username AWS \
  --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
```

### 4.2 Push de la imagen a ECR

```bash
ECR_URI=$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME

# Tag para ECR
docker tag promptlab-academy:latest $ECR_URI:latest
docker tag promptlab-academy:latest $ECR_URI:v1.0.0

# Push
docker push $ECR_URI:latest
docker push $ECR_URI:v1.0.0

echo "Imagen en: $ECR_URI:latest"
```

### 4.3 Task Definition para Fargate

Guarda este JSON como `task-definition.json` y ajusta los valores marcados con `<>`:

```json
{
  "family": "promptlab-academy",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::<ACCOUNT_ID>:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "promptlab-academy",
      "image": "<ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/promptlab-academy:latest",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 8080,
          "protocol": "tcp"
        }
      ],
      "healthCheck": {
        "command": ["CMD-SHELL", "wget -qO- http://localhost:8080/health || exit 1"],
        "interval": 30,
        "timeout": 5,
        "retries": 3,
        "startPeriod": 10
      },
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/promptlab-academy",
          "awslogs-region": "<REGION>",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

```bash
# Registrar la task definition
aws ecs register-task-definition \
  --cli-input-json file://task-definition.json \
  --region $REGION
```

### 4.4 Crear Log Group en CloudWatch

```bash
aws logs create-log-group \
  --log-group-name /ecs/promptlab-academy \
  --region $REGION
```

### 4.5 Crear el Cluster ECS

```bash
aws ecs create-cluster \
  --cluster-name promptlab-cluster \
  --region $REGION
```

### 4.6 Crear el Servicio Fargate

Reemplaza `<SUBNET_ID>` y `<SECURITY_GROUP_ID>` con los de tu VPC:

```bash
aws ecs create-service \
  --cluster promptlab-cluster \
  --service-name promptlab-academy-svc \
  --task-definition promptlab-academy \
  --desired-count 1 \
  --launch-type FARGATE \
  --platform-version LATEST \
  --network-configuration "awsvpcConfiguration={
    subnets=[<SUBNET_ID>],
    securityGroups=[<SECURITY_GROUP_ID>],
    assignPublicIp=ENABLED
  }" \
  --region $REGION
```

### 4.7 Obtener la IP pública del task

```bash
# Ver tasks corriendo
TASK_ARN=$(aws ecs list-tasks \
  --cluster promptlab-cluster \
  --service-name promptlab-academy-svc \
  --query 'taskArns[0]' --output text \
  --region $REGION)

# Obtener detalles del task
aws ecs describe-tasks \
  --cluster promptlab-cluster \
  --tasks $TASK_ARN \
  --region $REGION \
  --query 'tasks[0].attachments[0].details'
```

Luego ve a EC2 → Network Interfaces → busca la ENI del task para ver la IP pública.

```
http://<IP_PUBLICA>:8080
http://<IP_PUBLICA>:8080/health
```

### 4.8 (Opcional) ALB + HTTPS

Para producción se recomienda un Application Load Balancer con certificado ACM:

```
Internet → ALB (443/HTTPS) → Target Group (8080) → ECS Fargate Task
```

El health check del ALB debe apuntar a: `GET /health` → espera HTTP 200.

---

## Referencia de variables y puertos {#referencia}

| Variable | Valor | Descripción |
|---|---|---|
| Puerto del contenedor | `8080` | Nginx escucha en 8080 (no-root) |
| Puerto externo | `8080` | Mapeable a 80 o cualquier otro |
| Health check | HTTP 200 en `/` | `serve` responde 200 en la raíz |
| Base image | `node:20-alpine` | Monolítico — build + serve en uno |
| Imagen final aprox. | ~180 MB | node + deps + dist incluidos |

### Puertos alternativos

Si necesitas exponer en el puerto 80:

```bash
# Docker local
docker run -d -p 80:8080 promptlab-academy:latest

# En docker-compose.yml
ports:
  - "80:8080"
```

---

## Actualizar la aplicación

```bash
# 1. Editar src/App.jsx con los cambios
# 2. Rebuildar
docker compose up --build

# 3. Para producción — nuevo tag y push a ECR
docker build --platform linux/amd64 -t promptlab-academy:v1.1.0 .
docker tag promptlab-academy:v1.1.0 $ECR_URI:v1.1.0
docker push $ECR_URI:v1.1.0

# 4. Actualizar el servicio ECS con la nueva imagen
aws ecs update-service \
  --cluster promptlab-cluster \
  --service promptlab-academy-svc \
  --force-new-deployment \
  --region $REGION
```
