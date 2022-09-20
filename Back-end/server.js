import express from 'express'

import cors from 'cors'

import Api from './api/index.js'

const port = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use('/' , Api)


app.listen(port , () => {
    console.log("The app is running on port " + port); 
})