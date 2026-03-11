// start.cjs — lanza el proxy Express Y el servidor estático en un solo proceso
// Usa CommonJS (.cjs) para poder hacer require() junto con el package "type":"module"

const express = require('express');
const path = require('path');

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://host.docker.internal:11434';
const OLLAMA_MODEL    = process.env.OLLAMA_MODEL    || 'llama3.2:3b';
const PORT            = parseInt(process.env.PORT)   || 8080;

const app = express();
app.use(express.json({ limit: '2mb' }));

// ── Proxy API → Ollama ────────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const { messages, system } = req.body;

  const ollamaMessages = [];
  if (system) ollamaMessages.push({ role: 'system', content: system });
  ollamaMessages.push(...messages);

  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: OLLAMA_MODEL, messages: ollamaMessages, stream: false }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`Ollama error ${response.status}:`, errText);
      return res.status(502).json({ error: `Ollama respondió con ${response.status}`, detail: errText });
    }

    const data = await response.json();
    res.json({ content: data.message?.content || '' });

  } catch (err) {
    console.error('Error conectando con Ollama:', err.message);
    res.status(503).json({
      error: 'No se pudo conectar con Ollama. Verifica que esté corriendo en ' + OLLAMA_BASE_URL,
      detail: err.message
    });
  }
});

// ── Health check ──────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', ollama: OLLAMA_BASE_URL, model: OLLAMA_MODEL });
});

// ── Servir el React build (SPA) ───────────────────────────────────────────────
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ── Arrancar ──────────────────────────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✦ PromptLab Academy corriendo en http://localhost:${PORT}`);
  console.log(`  Ollama URL : ${OLLAMA_BASE_URL}`);
  console.log(`  Modelo     : ${OLLAMA_MODEL}`);
});
