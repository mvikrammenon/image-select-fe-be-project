const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json())
app.use('/api/v1/templates', require('./routes/templateRoutes'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '..', 'client/build')))

function startServer() {
    if (require.main === module) {
        app.listen(port, () => {
            console.log('Server started on port', port)
        });
    }
}

startServer()

module.exports = {
    app,
    startServer,
};