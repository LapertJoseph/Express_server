const router = require('express-promise-router')();


const { 
    selectAllUser, 
    postUser, 
    updateUser, 
    deleteUser, 
    selectAllCart, 
    postCart, 
    updateCart, 
    deleteCart, 
    login 
} = require('../controllers/user_controller');

router
    .route('/')
router
    .route('/auth')
    .get(login)
router
    .route('/users')
    .get(selectAllUser)
    .post(postUser)
    router
    .route('/users/:id')
    .delete(deleteUser)
    .put(updateUser)
router
    .route('/cart')
    .get(selectAllCart)
    .post(postCart)
router
    .route('/cart/:id')
    .put(updateCart)
    .delete(deleteCart)
    
module.exports = router;