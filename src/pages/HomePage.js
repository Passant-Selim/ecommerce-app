import React, { useEffect, useState } from "react";
import { fetchProductsFromDB } from "../api/shopify";
import ProductCard from "../components/ProductCard";
import "../components/ProductCard.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsFromDB().then((fetchedProducts) => {
      if (fetchedProducts && fetchedProducts.length > 0) {
        setProducts(fetchedProducts);
      } else {
        console.warn("No products found.");
      }
    });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#240046" }}>Products</h1>
      {products.length === 0 ? (
        <p style={{ textAlign: "center", color: "red" }}>
          No products available.
        </p>
      ) : (
        <div className="product-container">
          {products.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
