// start.cjs — Proxy Express para AWS Bedrock + servidor estático React
// Versión: promptlabCGR — Institucional CGR
// Reemplaza Ollama por AWS Bedrock (Claude 3 Haiku)

const express = require('express');
const path = require('path');
const {
  BedrockRuntimeClient,
  InvokeModelCommand,
} = require('@aws-sdk/client-bedrock-runtime');

// ── Configuración ─────────────────────────────────────────────────────────────
const AWS_REGION     = process.env.AWS_REGION      || 'us-east-1';
const BEDROCK_MODEL  = process.env.BEDROCK_MODEL   || 'anthropic.claude-3-haiku-20240307-v1:0';
const PORT           = parseInt(process.env.PORT)   || 8080;

// Cliente Bedrock — las credenciales vienen de variables de entorno:
// AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY (o IAM Role en ECS, recomendado)
const bedrockClient = new BedrockRuntimeClient({ region: AWS_REGION });

const app = express();
app.use(express.json({ limit: '2mb' }));

// ── Proxy API → Bedrock ───────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;

  // Formato de mensajes para Claude en Bedrock (Messages API)
  const payload = {
    anthropic_version: 'bedrock-2023-05-31',
    max_tokens: 2048,
    system: system || '',
    messages: messages,
  };

  try {
    const command = new InvokeModelCommand({
      modelId: BEDROCK_MODEL,
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify(payload),
    });

    const response = await bedrockClient.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));

    // Bedrock devuelve el texto en content[0].text
    const content = responseBody.content?.[0]?.text || '';
    res.json({ content });

  } catch (err) {
    console.error('Error conectando con Bedrock:', err.message);
    res.status(503).json({
      error: 'No se pudo conectar con AWS Bedrock',
      detail: err.message,
    });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', provider: 'AWS Bedrock', model: BEDROCK_MODEL, region: AWS_REGION });
});

// ── Servir el React build (SPA) ───────────────────────────────────────────────
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ── Arrancar ──────────────────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✦ PromptLab CGR corriendo en http://localhost:${PORT}`);
  console.log(`  Provider : AWS Bedrock`);
  console.log(`  Modelo   : ${BEDROCK_MODEL}`);
  console.log(`  Región   : ${AWS_REGION}`);
});
