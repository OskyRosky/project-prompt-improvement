# ──────────────────────────────────────────────────────────────────────────────
# PromptLab CGR — Versión Institucional
# Plataforma: linux/amd64 (AWS ECS Fargate x86_64)
# LLM: AWS Bedrock (Claude 3 Haiku) — sin Ollama
# ──────────────────────────────────────────────────────────────────────────────
FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

# Instalar dependencias (incluye AWS SDK para Bedrock)
COPY package.json ./
RUN npm install

# Copiar código fuente y compilar React
COPY . .
RUN npm run build

# Puerto estándar
EXPOSE 8080

# ── Variables de entorno ──────────────────────────────────────────────────────
# Región AWS donde está habilitado Bedrock
ENV AWS_REGION=us-east-1

# Modelo de Bedrock — Claude 3 Haiku (rápido y económico)
# Alternativa: anthropic.claude-3-sonnet-20240229-v1:0 (mayor calidad)
ENV BEDROCK_MODEL=anthropic.claude-3-haiku-20240307-v1:0

ENV PORT=8080

# NOTA DE SEGURIDAD:
# NO incluir AWS_ACCESS_KEY_ID ni AWS_SECRET_ACCESS_KEY aquí.
# En ECS Fargate usar IAM Task Role (más seguro).
# Para pruebas locales pasarlas con -e al correr el contenedor.

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080/health',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "start.cjs"]