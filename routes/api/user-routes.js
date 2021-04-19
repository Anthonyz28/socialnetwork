const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

} = require('../../controllers/User-controllers');

// Set up Get all and Post at /api/Users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// Set up Get one, put and Delete at /api/User/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;