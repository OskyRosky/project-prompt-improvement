# ──────────────────────────────────────────────────────────────────────────────
# PromptLab Academy — Mac M4 (Apple Silicon arm64)
# Node 20 compila React y sirve todo (static + proxy) en un solo proceso
# Ollama corre fuera del contenedor en el Mac
# ──────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine

WORKDIR /app

# Instalar dependencias
COPY package.json ./
RUN npm install

# Copiar código fuente y compilar React
COPY . .
RUN npm run build

# Puerto 4547
EXPOSE 4547

# Ollama corre en el Mac — host.docker.internal apunta al Mac desde Docker
ENV OLLAMA_BASE_URL=http://host.docker.internal:11434
ENV OLLAMA_MODEL=llama3:latest
ENV PORT=4547

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD node -e "require('http').get('http://localhost:4547/health',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

CMD ["node", "start.cjs"]
