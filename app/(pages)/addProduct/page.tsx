"use client";

import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    rent_amount: 0,
    imgLink: "",
    address: "",
    min_days: 0,
    deposit: 0,
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setProduct({
      ...product,
      [name]: name === "rent_amount" || name === "deposit" || name === "min_days" 
        ? parseInt(value) || 0 
        : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/products", {
        productData: product,
      });

      console.log("Product added successfully:", response.data);
      alert("Product added successfully!");

      setProduct({
        name: "",
        category: "",
        description: "",
        rent_amount: 0,
        imgLink: "",
        address: "",
        min_days: 0,
        deposit: 0,
        location: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Add Product</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name of the Product
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              value={product.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              required
              value={product.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              required
              value={product.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Rent Amount */}
          <div>
            <label htmlFor="rent_amount" className="block text-sm font-medium text-gray-700 mb-2">
              Rent
            </label>
            <input
              type="number"
              name="rent_amount"
              id="rent_amount"
              placeholder="Amount"
              required
              value={product.rent_amount}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Minimum Days */}
          <div>
            <label htmlFor="min_days" className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Days
            </label>
            <input
              type="number"
              name="min_days"
              id="min_days"
              placeholder="Minimum Days"
              required
              value={product.min_days}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Deposit */}
          <div>
            <label htmlFor="deposit" className="block text-sm font-medium text-gray-700 mb-2">
              Deposit
            </label>
            <input
              type="number"
              name="deposit"
              id="deposit"
              placeholder="Deposit"
              required
              value={product.deposit}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label htmlFor="imgLink" className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="imgLink"
              id="imgLink"
              placeholder="Image URL"
              required
              value={product.imgLink}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              required
              value={product.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              required
              value={product.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}