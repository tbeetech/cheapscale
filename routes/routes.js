const express =  require('express')
const router = express.Router()
router.get('/', (req, res)=>{
    console.log('home page is working')
})

module.exports = router

