const router = require('express-promise-router')();


const { selectAllUser, postUser, updateUser } = require('../controllers/user_controller');

router
    .route('/')
router
    .route('/users')
    .get(selectAllUser)
    .post(postUser)
    .put(updateUser)
    
    
module.exports = router;   