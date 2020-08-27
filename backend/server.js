const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('mongoDB database established successfully')
})


const attractionsRouter = require('./routes/attractions')

// app.get('/', function (req, res) {
//     res.render('index.html', {});
//   });

app.use('/attractions', attractionsRouter)

// app.get('/attractions', function (req, res) {
//     res.render(__dirname+ '/routes/attractions')
// })





app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})