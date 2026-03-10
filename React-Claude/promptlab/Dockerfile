# ──────────────────────────────────────────────────────────────────────────────
# Monolithic — Node 20 construye y sirve la app en una sola imagen
# Plataforma: linux/amd64  (Docker Desktop, QNAP, AWS ECS Fargate x86_64)
# ──────────────────────────────────────────────────────────────────────────────
FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

# Instalar dependencias primero (mejor cache de capas)
COPY package.json ./
RUN npm install

# Instalar servidor estático global
RUN npm install -g serve

# Copiar código fuente y construir
COPY . .
RUN npm run build

# Exponer puerto
EXPOSE 8080

# Health check usando node (no wget/curl requerido)
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

# Servir el build con `serve` en puerto 8080
# -s = single-page app (redirige todo a index.html)
# -l = puerto de escucha
CMD ["serve", "-s", "dist", "-l", "8080"]
