// server.js — Proxy Express que conecta el React app con Ollama
// Corre en puerto 3001 dentro del contenedor
// OLLAMA_BASE_URL se configura via variable de entorno

const express = require('express');
const app = express();

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://host.docker.internal:11434';
const OLLAMA_MODEL    = process.env.OLLAMA_MODEL    || 'llama3.2:3b';
const PORT            = process.env.PROXY_PORT      || 3001;

app.use(express.json({ limit: '2mb' }));

// CORS — permite llamadas desde el React app (mismo host, puerto diferente)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Health check
app.get('/proxy-health', (req, res) => {
  res.json({ status: 'ok', ollama: OLLAMA_BASE_URL, model: OLLAMA_MODEL });
});

// Endpoint principal — recibe {messages, system} y llama a Ollama
app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;

  // Construir el array de mensajes para Ollama
  // Ollama usa el mismo formato que OpenAI: [{role, content}]
  const ollamaMessages = [];
  if (system) {
    ollamaMessages.push({ role: 'system', content: system });
  }
  ollamaMessages.push(...messages);

  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: ollamaMessages,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`Ollama error ${response.status}:`, errText);
      return res.status(502).json({ error: `Ollama responded with ${response.status}`, detail: errText });
    }

    const data = await response.json();
    // Devolver en formato compatible con lo que espera App.jsx
    res.json({ content: data.message?.content || '' });

  } catch (err) {
    console.error('Proxy error:', err.message);
    res.status(503).json({ error: 'No se pudo conectar con Ollama', detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✦ Proxy corriendo en http://localhost:${PORT}`);
  console.log(`  Ollama URL : ${OLLAMA_BASE_URL}`);
  console.log(`  Modelo     : ${OLLAMA_MODEL}`);
});
