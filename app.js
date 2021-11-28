const express   = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()

connectDB()

var app = express()
app.use(express.urlencoded({ extended: false }))   
app.use(express.json())
app.use(cors())

app.use('/api', require('./routes/user'))

const PORT = process.env.PORT || 5000

app.listen(PORT, 
    console.log(`Server Runnig at PORT: ${PORT}`)
)
