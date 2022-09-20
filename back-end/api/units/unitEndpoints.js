import express from 'express'
import unitController from '../../controllers/unitController.js'

const router = express.Router()

// the list of our units endpoints

router.get('/units' , unitController.getAllUnits)

export default router