const path = require('path')
const express = require('express')

//const extras = require('./routes/extras') 

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

//server.use('/', extras)
//server.use('/api/v1/stuff', widgets)

module.exports = server
