const express =  require('express')
const router = express.Router()
router.get('/', (req, res)=>{
    res.send("working on routes")
})

module.exports = router

