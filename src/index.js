const express = require('express');
const app = express()
const routes = require('./routes')
const cors = require('cors')


app.use(cors())
require('./database')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    app.use(cors());
    next()
})

app.use(express.json())
app.use(routes)
app.listen(3001, () => {
    console.log('Open server at url: http://localhost:3001')
})