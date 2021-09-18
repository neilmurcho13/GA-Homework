import WhiskySearch from "../models/whisky.js";

async function createComment(req, res, next) {
  try {
    const { id } = req.params;
    const whisky = await WhiskySearch.findById(id);

    if (!whisky) {
      return res.status(404).send({ message: "movie does not exist" });
    }

    const newComment = req.body;

    whisky.comments.push(newComment);
    const savedWhisky = await whisky.save();

    return res.status(201).json(savedWhisky);
  } catch (err) {
    next(err);
  }
}

async function deleteComment(req, res, next) {
  try {
    const { id, commentId } = req.params;
    const whisky = await WhiskySearch.findById(id);

    if (!whisky) {
      return res.status(404).send({ message: "movie does not exist" });
    }
    const comment = whisky.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: "movie does not exist" });
    }

    comment.remove();

    const savedWhisky = await whisky.save();
    return res.status(200).send(savedWhisky);
  } catch (err) {
    next(err);
  }
}

async function updateComment(req, res, next) {
  try {
    const { id, commentId } = req.params;
    const whisky = await WhiskySearch.findById(id);

    if (!whisky) {
      return res.status(404).send({ message: "movie does not exist" });
    }
    const comment = whisky.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: "movie does not exist" });
    }

    comment.remove();

    const savedWhisky = await whisky.save();
    return res.status(200).send(savedWhisky);
  } catch (err) {
    next(err);
  }
}

export default {
  createComment,
  deleteComment,
  updateComment,
};
