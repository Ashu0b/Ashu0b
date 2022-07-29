const express=require('express')
const router=express.Router()
const wordController= require('../controllers/wordController')

router.get('/getwords',wordController.getwords)
module.exports=router