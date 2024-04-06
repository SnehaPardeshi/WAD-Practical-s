const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://divyashewale1582003:<raajmudra>@cluster0.titqqmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const app = express()

mongoose.connect(url)
app.use(express.json())
const mydbRouter = require('../WAD Atlas/router/mydbRoute')

app.use('/' , mydbRouter)

app.listen(5000, () => {
    console.log("server is running");
})