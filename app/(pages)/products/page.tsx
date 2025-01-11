"use client";

import { ProductCard } from "@/app/Components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  rent_amount: number;
  deposit: number;
  address: string;
  imgLink: string;
  location: string;
}

export default function Products() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/products");
        const products = data.products || [];
        setProductData(products);
        localStorage.setItem("productData", JSON.stringify(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchDataWithCache = () => {
      const cachedData = localStorage.getItem("productData");
      if (cachedData) {
        // Use cached data for initial render
        setProductData(JSON.parse(cachedData));
      }
      fetchProducts(); // Fetch and update data immediately
    };

    fetchDataWithCache(); // Initial fetch
    const intervalId = setInterval(fetchProducts, 60000); // Fetch every 60 seconds

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {productData.length > 0 ? (
        productData.map((product) => (
          <ProductCard key={product.id} productDataprop={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
