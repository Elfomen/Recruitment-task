import express from 'express'
import figureController from '../../controllers/figureController.js'

const router = express.Router()


router.get('/figures' , figureController.getAllFigures)

export default router