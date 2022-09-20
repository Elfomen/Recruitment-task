import express from 'express'
import figureController from '../../controllers/figureController.js'

const router = express.Router()

// the list of our figure endpoints

router.get('/figures' , figureController.getAllFigures)

export default router