const router = require('express-promise-router')();

const { route } = require('express/lib/application');

const {
    selectAllUser, 
    insertUser,
    deleteUser,
} = require('../controllers/user_controller');

router
    .route('/')
router
    .route('/users')
    .get(selectAllUser)
    .post(insertUser)
    .delete(deleteUser)
    


module.exports = router;   