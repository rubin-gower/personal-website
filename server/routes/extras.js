const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('*', function(req, res){
    res.send('no page here', 404);
})


module.exports = router