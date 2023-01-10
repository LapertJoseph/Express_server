const { 
    selectAllUser, 
    postUser, 
    updateUser, 
    deleteUser,  
    login, 
    logout,
    checkLoginStatus,
} = require('../controllers/User/user_controller');

const express = require("express");
const router = express.Router();

router.post('/auth', login);
router.get('/auth', checkLoginStatus);
router.get('/auth/logout', logout);
router.get('/users', selectAllUser);
router.post('/users', postUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
    
module.exports = router;