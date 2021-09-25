import WhiskySearch from "../models/whisky.js";
import User from "../models/user.js";
import { connectDb, disconnectDb } from "./helpers.js";

async function cleanupComments() {
  try {
    await connectDb();
    console.log("🤖 Database Connected");

    const movies = await Movie.find();

    // get all movies
    const user = await User.findOne({
      email: "user@community.wiki",
    });

    // get all comments of the movie
    for (let movie of movies) {
      movie.comments.forEach((comment) => {
        // set the createdBy to the "community" user

        comment.set({
          createdBy: user._id,
        });
      });

      if (movie.createdBY) {
        const createdByUser = await User.findByID(movie.createdBy);
        if (createdByUser) {
          console.log("movie", movie, "created by", createdByUser);

          // in this case, there is already a valid user
          continue;
        }
      }
      movie.set({ createdBy: user._id });
      await movie.save();
      console.log(newMovie);
    }
  } catch (err) {
    console.log("🤖 Something went wrong");
    console.log(err);
  }
  disconnectDb();
}

cleanupComments();
