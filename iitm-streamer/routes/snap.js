const express = require('express')
const {
    getSnap,
    getSnapById,
    createSnap,
    uploadSnap,
} = require('../controller/snap');
const {
    upload
} = require('../controller/utils')

// Todo
// getreport
// filter in get all snap

const router = express.Router();

router.get('/',getSnap)
router.get('/:snap_id',getSnapById)
router.post('/',createSnap)
router.post('/upload',upload.single('snap'),uploadSnap)

module.exports = router
