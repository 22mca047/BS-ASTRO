// to start Project open terminal and type : npm start or node app.js

const port_no = 8080 // Port Number where Project is running
const db_name = 'db_astrology' // Database Name

const express = require('express')
const mongoose = require('mongoose')
const url = `mongodb://0.0.0.0:27017/${db_name}`
const cors = require('cors')
const app = express()

mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true 
})
 
const con = mongoose.connection  
con.on('open', () => {
    console.log(`${db_name} - Database connected`)
})
app.use(cors())
app.use(express.json())

// Free Kundli
const r_kundliRouter = require('./routes/r_free_kundli')
app.use('/r_free_kundli', r_kundliRouter)

// Today Panchang
const r_today_panchag_Router = require('./routes/r_today_panchang')
app.use('/r_today_panchang', r_today_panchag_Router)

// Horoscope
const r_horoscopeRouter = require('./routes/r_horoscope')
app.use('/r_horoscope', r_horoscopeRouter)

// Kundli Matching
const r_kundli_matching_Router = require('./routes/r_kundli_matching')
app.use('/r_kundli_matching', r_kundli_matching_Router)

// Chaughadiya Muhurta
const r_chaughadiyaRouter = require('./routes/r_chaughadiya_muhurta')
app.use('/r_chaughadiya_muhurta', r_chaughadiyaRouter)

// Signup Details
const r_registerRouter = require('./routes/r_register')
app.use('/r_register', r_registerRouter)

// Display Port Number
app.listen(port_no, () => {
    console.log(`Server running on port : ${port_no}`)
})