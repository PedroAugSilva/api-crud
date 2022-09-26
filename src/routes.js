const { Router } = require('express')
const router = Router();
const { CreateUser, ListUser, DeleteUser, UpdateUser, ListOneUser } = require('./controller/UserController');

//Create user
router.post('/user/register', CreateUser)

// Read user
router.get('/user', ListUser)

//Delete user
router.delete('/user/:id/delete', DeleteUser)

//Update user
router.put('/user/:id/update', UpdateUser)

//Read one user
router.get('/user/:id', ListOneUser)


module.exports = router