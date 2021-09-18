import express from "express";
import whiskyController from "../controller/whiskyController.js";
import commentsController from "../controller/commentsController.js";
import countriesController from "../controller/countriesController.js";

const router = express.Router();

router
  .route("/whisky")
  .get(whiskyController.getAllWhisky)
  .post(whiskyController.createWhisky);

router
  .route("/whisky/:id")
  .get(whiskyController.getWhisky)
  .delete(whiskyController.deleteWhisky)
  .put(whiskyController.updateWhisky);

router.route("/whisky/:id/comments").post(commentsController.createComment);

router
  .route("/whisky/:id/comments/:commentId")
  .delete(commentsController.deleteComment)
  .put(commentsController.updateComment);

router
  .route("/countries")
  .get(countriesController.getAllCountries)
  .post(countriesController.createCountry);

router
  .route("/countries/:id")
  .get(countriesController.getCountry)
  .put(countriesController.updateCountry)
  .delete(countriesController.deleteCountry);

//     AllWhiskiesForCountry);

// router.route("/whisky/:id/countries").get(whiskyController.getAllCountries);

export default router;
