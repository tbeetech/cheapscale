PORT = 5000

const ejs = require('ejs')

const express = require('express')

const routes = require('./routes/routes.js')

const app = express()

app.use(express.static('public'))

app.set("view engine", "ejs")

app.use('/', routes)

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}\nhttp://localhost:5000/`)

})