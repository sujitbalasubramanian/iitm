
const mongoose = require('mongoose')

const snapSchema = new mongoose.Schema({
    device: { type: mongoose.Schema.Types.ObjectId, ref: 'device' },
    stream: Number,
    span_path: String,
    violation: String,
    rn_no: String

})

module.exports = mongoose.model("snap", snapSchema)
