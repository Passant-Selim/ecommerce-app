import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "./CartPage.css";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, calculateTotal } =
    useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-item-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onAdd={addToCart}
              onRemove={removeFromCart}
            />
          ))}
          <h2 className="cart-total">
            Total: {calculateTotal().toFixed(2)} LE
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
