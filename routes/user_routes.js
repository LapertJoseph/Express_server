const router = require('express-promise-router')();


const {
    selectAllUser, 
    insertUser,
    deleteUser,
    updateUser,
} = require('../controllers/user_controller');

router
    .route('/')
router
    .route('/users')
    .get(selectAllUser)
    .post(insertUser)
    .delete(deleteUser)
    .put(updateUser)
    
module.exports = router;   