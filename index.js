const express = require('express');
const app = express();
const port = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando corretamente! 🚀');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = app;