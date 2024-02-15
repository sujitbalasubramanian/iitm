const express = require('express')
const {
    getDevices,
    getDevicesByName,
    createDevice,
    deleteDevice
} = require('../controller/devices');

const router = express.Router();

router.get('/',getDevices)
router.get('/:device_name',getDevicesByName)
router.post('/',createDevice)
router.delete('/:device_name',deleteDevice)

module.exports = router
