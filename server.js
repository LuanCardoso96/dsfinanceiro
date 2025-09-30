const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static('.'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Rota para financeiro (novo nome)
app.get('/financeiro', (req, res) => {
  res.sendFile(path.join(__dirname, 'financeiro.html'));
});

// Rota para pessoas
app.get('/pessoas', (req, res) => {
  res.sendFile(path.join(__dirname, 'pessoas.html'));
});

// Rota para emitente
app.get('/emitente', (req, res) => {
  res.sendFile(path.join(__dirname, 'Emitente.html'));
});

// Rota para agenda
app.get('/agenda', (req, res) => {
  res.sendFile(path.join(__dirname, 'agenda.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📱 Acesse: http://localhost:${PORT}`);
});

