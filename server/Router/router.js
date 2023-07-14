const userModel = require('../model/userModel')
const router = require('express').Router()


router.get('/', (req, res) =>{
    res.send('runnig @beta')
})

router.get('/users', async(req,res) =>{
    const result = await userModel.find()
    res.send(result)
})

router.post('/users', async(req,res) =>{
    const data = req.body?.value
    await userModel.create(data).then(user => res.json(user)).catch(err => res.json(err)) 

})
router.put('/user/:id', async(req,res) =>{
    const id = req.params?.id
    const data = req.body
    await userModel.findByIdAndUpdate(
        { _id: id },
        {
         ...data
        },
      ).then(user => {
        res.json(user)
    }).catch(err => res.json(err)) 

})

module.exports = router

