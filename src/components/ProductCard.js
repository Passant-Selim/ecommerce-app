import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!addToCart) {
    console.error(
      "CartContext not provided. Ensure CartProvider wraps the component tree."
    );
    return null;
  }

  return (
    <div className="product-card">
      <img
        className="product-card-img"
        src={product.images[0]}
        alt={product.title}
      />
      <h3 className="product-card-title">{product.title}</h3>
      <p className="product-card-price">{product.price}</p>
      <button
        className="product-card-button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
