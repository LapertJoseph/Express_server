const router = require('express-promise-router')();


const { selectAllUser, postUser } = require('../controllers/user_controller');

router
    .route('/')
router
    .route('/users')
    .get(selectAllUser)
    .post(postUser)
    
    
module.exports = router;   