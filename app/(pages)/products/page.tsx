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
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000); // Default max price

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/products");
        const products = data.products || [];
        setProductData(products);
        setFilteredData(products);
        localStorage.setItem("productData", JSON.stringify(products));
      } catch (e: unknown) {
        const error = e as AxiosError;
        if (error.response?.status === 401) {
          window.location.href = "/api/auth/signin";
        } else {
          console.error("Failed to fetch products:", e);
        }
      }
    };

    const fetchDataWithCache = () => {
      const cachedData = localStorage.getItem("productData");
      if (cachedData) {
        setProductData(JSON.parse(cachedData));
        setFilteredData(JSON.parse(cachedData));
      }
      fetchProducts(); // Fetch fresh data immediately
    };

    fetchDataWithCache();
    const intervalId = setInterval(fetchProducts, 60000);

    return () => clearInterval(intervalId);
  }, []);

  // Real-time search and filter logic
  useEffect(() => {
    let filtered = productData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) => product.rent_amount >= minPrice && product.rent_amount <= maxPrice
    );

    setFilteredData(filtered);
  }, [searchTerm, selectedCategory, minPrice, maxPrice, productData]);

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
            <Link href="/api/auth/signin" className="text-gray-600 hover:text-gray-800">
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      {/* Search and Filter Controls */}
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h1>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by item name..."
            className="border p-2 rounded-md w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border p-2 rounded-md w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Electronics and Gadgets">Electronics and Gadgets</option>
            <option value="Party and Events Equipment">Party and Events Equipment</option>
            <option value="Sports & Outdoor Equipment">Sports and Outdoor Equipment</option>
          </select>

          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              className="border p-2 rounded-md w-full"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Max Price"
              className="border p-2 rounded-md w-full"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Product List */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.length > 0 ? (
            filteredData.map((product) => (
              <ProductCard key={product.id} productDataprop={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
