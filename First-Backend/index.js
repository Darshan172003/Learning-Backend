const express = require('express') // to use express framework for backend development
require('dotenv').config() // to use .env file
const app = express()
const port = 3000 

app.get('/', (req, res) => {  // get request to get the response
  res.send('Namaste Backend')  // response to the get request
})

app.get('/about', (req, res) => {
    res.send('<h1>Learning Backend From Chai aur Code</h1>')
})

app.get('/social', (req, res) => {
    res.send('linkdln :- www.linkedin.com/in/darshan-yogesh-patil-52a071254')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
