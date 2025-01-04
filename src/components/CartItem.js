import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onAdd, onRemove }) => {
  const imageSrc = item.images?.[0] || "default-image-path";
  const price = item.price || 0;
  const currencyCode = "LE";

  return (
    <div className="cart-item">
      <img className="cart-item-img" src={imageSrc} alt={item.title} />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">
          {price} {currencyCode}
        </p>
        <p className="cart-item-subtotal">
          Subtotal: {(price * item.quantity).toFixed(2)} {currencyCode}
        </p>
      </div>
      <div className="cart-item-controls">
        <button className="cart-item-button" onClick={() => onRemove(item.id)}>
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button className="cart-item-button" onClick={() => onAdd(item)}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
