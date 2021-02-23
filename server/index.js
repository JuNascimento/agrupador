const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send({ nome: 'Julia Nascimento' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

