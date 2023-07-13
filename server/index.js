const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./Router/router.js')
const router = express.Router()

const app = express()
const port = process.env.PORT || 5000
// middlewares
dotenv.config()
app.use(express.json())
app.use(cors())


app.use('/', userRoutes)


// connect
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sbte6ld.mongodb.net/?retryWrites=true&w=majority`)
.then(async()=>{
    app.listen(port, console.log("running on ", port))
}).catch((err) => {
    console.log(err)
})

