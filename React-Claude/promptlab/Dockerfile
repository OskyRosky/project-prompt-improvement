# ──────────────────────────────────────────────────────────────────────────────
# PromptLab Academy — Monolítico con Ollama
# Node 20 compila React y sirve todo (static + proxy) en un solo proceso
# Plataforma: linux/amd64  (Docker Desktop, QNAP, AWS ECS Fargate x86_64)
# ──────────────────────────────────────────────────────────────────────────────
FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

# Instalar dependencias (mejor cache si package.json no cambia)
COPY package.json ./
RUN npm install

# Copiar todo el código fuente y compilar React
COPY . .
RUN npm run build

# Puerto único: React + proxy en el mismo servidor Express
EXPOSE 8080

# Ollama URL configurable — por defecto apunta al host de Docker Desktop (Mac/Windows)
# En QNAP: docker run -e OLLAMA_BASE_URL=http://<IP_QNAP>:11434 ...
ENV OLLAMA_BASE_URL=http://host.docker.internal:11434
ENV OLLAMA_MODEL=llama3.2:3b
ENV PORT=8080

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080/health',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

# Un solo proceso: Express sirve el build de React Y el proxy a Ollama
CMD ["node", "start.cjs"]
