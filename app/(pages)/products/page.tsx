"use client";

import { ProductCard } from "@/app/Components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  rent_amount: number;
  location: string;
}

export default function Products() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cachedData = localStorage.getItem("productData");
        if (cachedData) {
          // Use cached data if available
          setProductData(JSON.parse(cachedData));
        } else {
          // Fetch from API if no cache exists
          const { data } = await axios.get("http://localhost:3000/api/products");
          const products = data.products || [];
          setProductData(products);
          localStorage.setItem("productData", JSON.stringify(products));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
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
