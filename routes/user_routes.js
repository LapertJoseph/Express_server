const router = require('express-promise-router')();

const { route } = require('express/lib/application');

const {
    selectAllUser,
} = require('../controllers/user_controller');

router
    .route('/')
router
    .route('/users')
    .get(selectAllUser)
    


module.exports = router;   