const express = require('express')
const router = express.Router()
const  Mydb = require('../model/mydb')

router.post('/add' , async(req, res) => {
    const newData = new data ({
        name : req.body.name,
        sub : req.body.sub,
        tech : req.body.tech

    })
    const added = await newData.save()
    res.json(added)
})

module.exports = router