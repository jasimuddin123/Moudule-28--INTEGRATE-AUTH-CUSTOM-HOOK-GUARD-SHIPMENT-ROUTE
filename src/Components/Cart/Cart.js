import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {

        const product = cart[i];
        total = total + product.price * product.quantity;
    

    }
    let shipping = 0;
    if (total < 50) {
        shipping = 0
    }
    else if (total > 100) {
        shipping = 20

    }
    const vat = total / 10;
    return (
        <div>
            <h2>Order Summarry :</h2>
            <h3>Item Order:{cart.length}</h3>
            <p>Shipping cost : {shipping}</p>
            <p><small>Vat + Tax{vat}</small></p>
            <h4> Total Price:{total + shipping + vat}</h4>
           <Link to="./review">
           <button class="main-button">Order Review </button>
           </Link>
        </div>
    );
};

export default Cart;