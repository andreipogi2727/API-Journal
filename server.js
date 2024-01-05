const express = require('express')
const mongoose = require('mongoose')
const Journal = require('./models/journalModel')
const app = express()



app.use(express.json())

app.post('/journal', async(req, res) =>
{
    
    try {
        const journal = await Journal.create(req.body)
        res.status(200).json(journal)
    } catch (error) {
        
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
   
    console.log(req.body)
})

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


