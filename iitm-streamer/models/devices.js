const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    device_name: String,
    location: String,
    streams: [String]
})

module.exports = mongoose.model("device", deviceSchema)
