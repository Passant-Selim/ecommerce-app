// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import axios from "axios";

import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  domain: "rsji21-jp.myshopify.com",
  storefrontAccessToken: "6b88df180f35b852d54322b09425c9a2",
});

export const fetchProductsAndSaveToDB = async () => {
  try {
    const products = await shopifyClient.product.fetchAll();

    const formattedProducts = products.map((product) => ({
      id: parseInt(product.id.split("/").pop(), 10),
      title: product.title,
      description: product.description,
      images: product.images.map((image) => image.src),
      price: product.variants[0]?.price.amount,
    }));

    const saveResponse = await axios.post(
      "http://localhost:5000/api/products/save-products",
      { products: formattedProducts }
    );
    console.log("Saved products response:", saveResponse.data);
  } catch (error) {
    console.error("Error during product save and fetch:", error);
  }
};

export const fetchProductsFromDB = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/products/get-products"
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching products from the database:", error);
    return [];
  }
};
