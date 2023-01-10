const {
    selectAllCart,
    postCart, 
    updateCart, 
    deleteCart, 
} = require('../controllers/cart_controller');

const express = require("express");
const router = express.Router();

router.get('/cart', selectAllCart);
router.post('/cart', postCart);
router.put('/cart', updateCart);
router.delete('/cart', deleteCart);

module.exports = router;