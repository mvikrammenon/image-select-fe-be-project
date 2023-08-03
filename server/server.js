const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use('/api/v1/template', require('./routes/templateRoutes'))
app.use(express.static('public'))

app.listen(port, () => {
    console.log('Server started on port', port)
})