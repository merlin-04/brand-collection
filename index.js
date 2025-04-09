// steps to define a server

//loads .env file content into process .env
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./database/dbConnection')

//creating express server
const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads', express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT, () => {
    console.log(`BrandCollection server running in ${PORT}`);

})
pfServer.get('/', (req, res) => {
    res.status(200).send(`<h1 style='color:red'>BrandCollection Server starting at ${PORT}`)
})

