import express from 'express'
import unitApi from './units/unitEndpoints.js'
import figureApi from './figures/figuresEndpoints.js'

const router = express.Router()

// getting both the unit and the figure endpoints in place

router.use('/' , unitApi)
router.use('/' , figureApi)


export default router