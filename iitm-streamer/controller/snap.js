const Snap = require('../models/snap')
const Device = require('../models/devices')
const multer = require('multer')

module.exports.getSnap = async (req, res) => {
    try {
        const snaps = await Snap.find({}).populate('device');
        res.send({
            status: 200,
            data: snaps,
        })
    } catch (err) {
        console.log(err.message)
        res.send({
            status: 400,
            message: err.message
        })
    }
}

module.exports.getSnapById = async (req, res) => {
    try {
        const { snap_id } = req.params;
        const snap = await Snap.findById(snap_id).populate('device');
        console.log(snap)
        if (!snap) {
            return res.send({
                status: 400,
                message: "snap not found",
            })
        }
        res.send({
            status: 200,
            data: snap
        })

    } catch (err) {
        console.log(err.message)
        res.send({
            status: 400,
            message: err.message
        })
    }
}

module.exports.createSnap = async (req, res) => {
    try {
        const {
            device_name,
            stream,
            snap_path,
            violation,
            rn_no
        } = req.body;

        const device = await Device.findOne({ device_name })

        if (!device) {
            return res.send({
                status: 400,
                message: "device not exist"
            })
        }

        const snap = new Snap({
            device,
            stream,
            snap_path,
            violation,
            rn_no
        })

        snap.save().then(() => {
            res.send({
                status: 200,
                message: "snap created successfully"
            })
        }).catch(() => {
            res.send({
                status: 400,
                message: "something went wrong while create a snap"
            })
        });
    } catch (err) {
        console.log(err.message)
        res.send({
            status: 400,
            message: err.message
        })
    }
}

module.exports.uploadSnap = async (req, res) => {
    return res.send({
        snap_path: req.file.path,
        status: "File uploaded successfully"
    })
}
