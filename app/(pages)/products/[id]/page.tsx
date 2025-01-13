"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ProductDetails {
  id: number;
  name: string;
  category: string;
  description: string;
  rent_amount: number;
  address: string;
  deposit: number;
  location: string;
  isRented: boolean;
  imgLink?: string; // Optional: Image URL
}

export default function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (!params || !params.id) {
          throw new Error("Invalid product ID");
        }

        const { data } = await axios.get(
          `http://localhost:3000/api/products/${params.id}`
        );
        setProductDetails(data.product || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
        router.push("/"); // Redirect to home if product is not found
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [params, router]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;

  if (!productDetails) return <div className="text-center text-xl">Product not found.</div>;

  const handleRequest = async () => {
    try {
      if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return;
      }

      const response = await axios.post("http://localhost:3000/api/rent", {
        itemId: productDetails?.id,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      });

      alert("Request for rent sent to the owner successfully.");
      console.log("Request response:", response.data);
    } catch (error) {
      console.error("Error sending rent request:", error);
      alert("Failed to send the rent request. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Display product image if available */}
      {productDetails.imgLink && (
        <div className="mb-6 relative w-full h-64">
          <img
            src={productDetails.imgLink}
            alt={`Image of ${productDetails.name}`}
            className="h-[200px] w-[300px] object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl font-semibold mb-4">{productDetails.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{productDetails.description}</p>

      <div className="flex justify-between text-lg mb-4">
        <p className="font-bold text-gray-900">Rent Amount: ${productDetails.rent_amount}</p>
        <p className="font-bold text-gray-900">Location: {productDetails.location}</p>
      </div>

      <div className="text-lg text-gray-700 mb-4">
        <p className="font-semibold">Address: {productDetails.address}</p>
        <p className="font-semibold">Deposit: ${productDetails.deposit}</p>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => router.push("/products")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </button>
      </div>

      <div className="mt-6 text-center">
        {productDetails.isRented ? (
          <h4 className="text-red-600">This item is currently rented.</h4>
        ) : (
          <>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h2 className="font-semibold mb-4">Select Date Range</h2>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date ?? undefined)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Start Date"
                  dateFormat="yyyy/MM/dd"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date | null) => setEndDate(date ?? undefined)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="End Date"
                  dateFormat="yyyy/MM/dd"
                />
              </div>

              <div style={{ marginTop: "20px" }}>
                {startDate && endDate ? (
                  <p>
                    Selected Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
                  </p>
                ) : (
                  <p>Select a date range</p>
                )}
              </div>
            </div>

            <button
              onClick={handleRequest}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mt-4"
            >
              Request For Rent
            </button>
          </>
        )}
      </div>
    </div>
  );
}
