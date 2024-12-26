"use client";

import { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    rent_amount: 0,
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Ensure `rent_amount` is always an integer
    setProduct({
      ...product,
      [name]: name === "rent_amount" ? parseInt(value) || 0 : value,
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
        description: "",
        rent_amount: 0,
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
          value={product.rent_amount || ""}
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
