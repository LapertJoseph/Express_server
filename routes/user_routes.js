const router = require('express-promise-router')();


const { selectAllUser, postUser, updateUser, deleteUser, selectAllCart, postCart, updateCart, deleteCart } = require('../controllers/user_controller');

router
    .route('/')
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