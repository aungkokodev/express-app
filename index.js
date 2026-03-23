const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/ping', (req, res) => {
  res.send('<h1>Pong</h1>')
})

app.get('/greet', (req, res) => {
  res.send('<h1>Hello!</h1>')
})

app.get('/ding', (req, res) => {
  res.send('<h1>Dong</h1>')
})

app.get('/test', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/king', (req, res) => {
  res.send('<h1>Kong</h1>')
})

app.get('/abcd', (req, res) => {
  res.send('<h1>efg</h1>')
})

app.get('/some', (req, res) => {
  res.send('<h1>thing</h1>')
})

app.get('/air', (req, res) => {
  res.send('<h1>air</h1>')
})

app.get('/fire', (req, res) => {
  res.send('<h1>fire</h1>')
})

app.get('/earth', (req, res) => {
  res.send('<h1>earth</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
