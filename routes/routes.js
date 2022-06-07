const express =  require('express')
const router = express.Router()
router.get('/', (req, res)=>{
    res.send("<p>sss</p>")
})

module.exports = router

