PORT = 5000
const express = require('express')
const routes = require('./routes/routes')
const app = express()
app.use('/routes/routes', routes)


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
