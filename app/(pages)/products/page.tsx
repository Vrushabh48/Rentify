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
        const { data } = await axios.get("http://localhost:3000/api/products");
        setProductData(data.products || []); // Ensure fallback to empty array
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
