const express = require('express')
const mongoose = require('mongoose')
const Journal = require('./models/journalModel')
const app = express()
const journalRoute = require('./routes/journalRoute')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/journals', journalRoute )




mongoose
.connect('mongodb+srv://admin:admin123@devandreiapi.ohinqtp.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>
{
app.listen(3000, ()=>
{
    console.log('Journal API app is running on port 3000')
})
    console.log('Succesfully connected to MongoDB')
}).catch((error)=>
{
    console.log(error)
})


