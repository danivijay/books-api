const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('welcome to API')
})

app.listen(port, () => {
  console.log('listning on port ', port)
})
