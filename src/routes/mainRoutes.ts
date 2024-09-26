import express from 'express'
import mainController from '../controller/mainController'
const router = express.Router()

router.get('/', mainController.index)
router.get('/statistics', mainController.statistics)

export default router
