import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Home from "./Home";
import App from "../App";

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <div>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>{product.category}</p>
                            <p>${product.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;