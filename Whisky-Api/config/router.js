import express from 'express'
import whiskyController from '../controller/whiskyController.js'

const router = express.Router()

router.route('/whisky')
    .get(whiskyController.getAllWhisky)
    .post(whiskyController.createWhisky)


router.route('/whisky/:id')
    .get(whiskyController.getWhisky)
    .delete(whiskyController.deleteWhisky)
    .put(whiskyController.updateWhisky)

export default router


