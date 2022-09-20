import express from 'express'
import unitController from '../../controllers/unitController.js'

const router = express.Router()


router.get('/units' , unitController.getAllUnits)

export default router