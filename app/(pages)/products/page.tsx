"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { ProductCard } from "../../components/ProductCard";
import Link from "next/link";

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
  isRented: boolean;
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
      } catch (e: unknown) {
        const error = e as AxiosError;
        if (error.response?.status === 401) {
          // Redirect to sign-in page if unauthorized
          window.location.href = "/api/auth/signin";
        } else {
          console.error("Failed to fetch products:", e);
        }
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
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">Rentify</div>
          <div className="space-x-6">
            <Link href="/home" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link
              href="/api/auth/signin"
              className="text-gray-600 hover:text-gray-800"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 lg:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productData.length > 0 ? (
            productData.map((product) => (
              <ProductCard key={product.id} productDataprop={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No products available.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
