const {
    selectAllCart,
    postCart, 
    updateCart, 
    deleteCart, 
} = require('../controllers/Cart/cart_controller');

const express = require("express");
const router = express.Router();

router.get('/cart', selectAllCart);
router.post('/cart', postCart);
router.put('/cart/:id', updateCart);
router.delete('/cart/delete/:id', deleteCart);

module.exports = router;