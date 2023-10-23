import * as dotenv from 'dotenv'
dotenv.config()

const express = require('express')
const app = express()
const PORT=8000;

//req=what we request/send to server
//res= what we receive from server

app.get('/', (req, res)=> {
  res.send('Hello World')
})

//app.listen(3000)

app.listen(PORT,() =>console.log("server started on the port",PORT));