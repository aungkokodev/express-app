const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/ping', (req, res) => {
  res.send('<h>Pong</h1>')
})


const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
