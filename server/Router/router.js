const userModel = require('../model/userModel')
const router = require('express').Router()


router.get('/', (req, res) =>{
    res.send('runnig @beta')
})

router.get('/users', async(req,res) =>{
    const result = await userModel.find()
    console.log(result)
    res.send(result)
})

module.exports = router

