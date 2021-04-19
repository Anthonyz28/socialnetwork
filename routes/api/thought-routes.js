const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

// Set up Get all and Post at /api/Thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up Get one, put and Delete at /api/Thought/:id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .put(addReaction)
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;