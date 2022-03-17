const express = require('express')
const app = express()
const port = 8585

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/commands.txt")
  console.log("Connected");
})

app.listen(port, () => {
  console.log(`Caroline app listening at http://nacatech:${port}`)
})