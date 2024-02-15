const Device = require('../models/devices')

module.exports.getDevices = async (req,res) => {
    try{
        const devices = await Device.find({});
        res.send({
            status: 200,
            data: devices,
        })
    } catch (err) {
        console.log(err.message)
        res.send({
            status: 400,
            message: err.message
        })
    }
}

module.exports.getDevicesByName = async (req,res) => {
    try {
        const { device_name }= req.params;
        console.log(device_name)
        const device = await Device.findOne({device_name});
        console.log(device)
        if(!device){
            return res.send({
                status: 400,
                message: "device not found",
            })
        }
        res.send({
            status: 200,
            data: device
        })

    } catch (err) {
        console.log(err.message)
        res.send({
            status: 400,
            message: err.message
        })
    }
}

module.exports.createDevice = async (req,res) => {
    try {
        const {
            device_name,
            location,
            streams
        } = req.body;
        const existingdevice = await Device.findOne({device_name})
        if(existingdevice){
            return res.send({
                status: 400,
                message: "device already exist"
            })
        }
        const device = new Device({
            device_name,
            location,
            streams
        })
        device.save().then(() => {
            res.send({
                status: 200,
                message: "device created successfully"
            })
        }).catch(() => {
            res.send({
                status: 400,
                message: "something went wrong while create a device"
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

module.exports.deleteDevice = async (req,res) => {
    try {
        const {device_name} = req.params;

        const existingdevice = await Device.findOne({device_name})
        if(!existingdevice){
            return res.send({
                status: 400,
                message: "device not exist"
            })
        }

        await Device.deleteOne({device_name})
        res.send({
            status: 200,
            message: `${device_name} deleted successfully`
        })

    } catch (err) {
        console.log(err.message)
        res.send({
            status: 400,
            message: err.message
        })
    }
}
