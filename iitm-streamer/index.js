const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const device = require('./routes/devices')

const app = express()

app.use(cors())
app.use(express.json())

mongoose
    .connect("mongodb://0.0.0.0:27017/iitm-streamer")
    .then(_ => {
        console.log("db connected sucessfully")
    })
    .catch(err => {
        console.log(err.message)
    })

app.use("/devices",device)


const port = 4000
app.listen(port,() => {
    console.log(`server started at ${port}`)
})

