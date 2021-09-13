import express, { response } from 'express'
import { getAllWhisky } from '../controller/whiskyController.js'

const router = express.Router()

router.route('/whisky').get(getAllWhisky)

export default router


