const express = require('express')
const PORT = 5000
const app = express()
const routes = require('./routes')
app.listen(PORT, ()=>{
    console.log($`App running on port{PORT}`)
})