import express from "express";
import whiskyController from "../controller/whiskyController.js";
import commentsController from "../controller/commentsController.js";
import countriesController from "../controller/countriesController.js";
import userController from "../controller/userController.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router
  .route("/whisky")
  .get(whiskyController.getAllWhisky)
  .post(secureRoute, whiskyController.createWhisky);

router
  .route("/whisky/:id")
  .get(whiskyController.getWhisky)
  .delete(secureRoute, whiskyController.deleteWhisky)
  .put(secureRoute, whiskyController.updateWhisky);

router
  .route("/whisky/:id/comments")
  .post(secureRoute, commentsController.createComment);

router
  .route("/whisky/:id/comments/:commentId")
  .delete(secureRoute, commentsController.deleteComment)
  .put(secureRoute, commentsController.updateComment);

router
  .route("/countries")
  .get(countriesController.getAllCountries)
  .post(secureRoute, countriesController.createCountry);

router
  .route("/countries/:id")
  .get(countriesController.getCountry)
  .put(secureRoute, countriesController.updateCountry)
  .delete(secureRoute, countriesController.deleteCountry);

//     AllWhiskiesForCountry);
Router.route("/actors/:id/movies").get(actorsController.getAllMoviesForActor);

Router.route("/movies/id:/actors").get(moviesController.getAllActorsForMovie);

Router.route("/register").post(userController.registerUser);

Router.route("/login").post(userController.loginUser);

// router.route("/whisky/:id/countries").get(whiskyController.getAllCountries);

export default router;
