const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use('/api/v1/templates', require('./routes/templateRoutes'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log('Server started on port', port)
})