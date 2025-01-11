"use client";

import { useState } from "react";
import axios from "axios";

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
  
    // Ensure `rent_amount` is always an integer
    setProduct({
      ...product,
      [name]: name === "rent_amount" ? parseInt(value) || 0 : value,
      [name]: name === "deposit" ? parseInt(value) || 0 : value,
    });
  };
  

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/products", {
        productData: product,
      });

      // Log the success response and reset the form
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
    <div>
      <h1>Add Product</h1>
      <div>
        <label htmlFor="name">Name of the Product</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          required
          value={product.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          id="category"
          required
          value={product.category}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          id="description"
          required
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="rent_amount">Rent</label>
        <input
          type="number"
          name="rent_amount"
          placeholder="Amount"
          id="rent_amount"
          required
          value={product.rent_amount || 0}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="imgLink">Image URL</label>
        <input
          type="text"
          name="imgLink"
          placeholder="Image URL"
          id="imgLink"
          required
          value={product.imgLink || ""}
          onChange={ handleInputChange }
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="tsxt"
          name="address"
          placeholder="Address"
          id="address"
          required
          value={product.address || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="deposit">Deposit</label>
        <input
          type="number"
          name="deposit"
          placeholder="Deposit"
          id="deposit"
          required
          value={product.deposit || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          id="location"
          required
          value={product.location}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}
