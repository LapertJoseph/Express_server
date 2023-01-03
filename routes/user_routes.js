const router = require('express-promise-router')();


const { selectAllUser, postUser, updateUser, deleteUser, selectAllCart, postCart } = require('../controllers/user_controller');

router
    .route('/')
router
    .route('/users')
    .get(selectAllUser)
    .post(postUser)
    .put(updateUser)
router
    .route('/users/:id')
    .delete(deleteUser)
router
    .route('/cart')
    .get(selectAllCart)
    .post(postCart)
    
module.exports = router;