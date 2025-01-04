import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  createCheckout,
  fetchProductsAndSaveToDB,
  redirectToCheckout,
} from "../api/shopify";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const [checkoutUrl, setCheckoutUrl] = useState("");

  useEffect(() => {
    const initializeCheckout = async () => {
      const checkout = await createCheckout();
      const lineItems = cart.map((item) => ({
        variantId: item.variants[0]?.id,
        quantity: 1,
      }));
      const updatedCheckout = await fetchProductsAndSaveToDB(
        checkout.id,
        lineItems
      );
      setCheckoutUrl(updatedCheckout.webUrl);
    };

    if (cart.length > 0) initializeCheckout();
  }, [cart]);

  return (
    <div>
      <h1>Checkout</h1>
      {checkoutUrl ? (
        <button onClick={() => redirectToCheckout(checkoutUrl)}>
          Proceed to Checkout
        </button>
      ) : (
        <p>Loading checkout...</p>
      )}
    </div>
  );
};

export default CheckoutPage;
