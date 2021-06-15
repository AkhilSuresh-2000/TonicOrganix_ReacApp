import React from 'react'
import Cart from './Shop'
export default function Checkout() {
    var val = Math.floor(1000 + Math.random() * 9000);

    return (
        <div className="container">
            <h1>Thanks for shopping with Tonic Organix. Someone will contact you shortly to complete your order.</h1>
            <h2>Your order number  is: {val}</h2>
            <h2>View/ Edit your order here</h2>
            <Cart/>
        </div>
    )
}
