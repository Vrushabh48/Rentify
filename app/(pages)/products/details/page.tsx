"use client";

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/app/components/Navbar";
import { Suspense } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter, useParams } from "next/navigation";

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
  imgLink?: string;
}

export default function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [requestLoading, setRequestLoading] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [request, setRequest] = useState(false);
  const router = useRouter();
  const params = useParams();

  const productId = params?.id; // Extract productId from route parameters

  useEffect(() => {
    if (!productId) return;

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/detail?id=${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProductDetails(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;

  if (!productDetails) return <div className="text-center text-xl">Product not found.</div>;

  const handleRequest = async () => {
    try {
      if (!startDate || !endDate) {
        toast("Please select both start and end dates.");
        return;
      }

      setRequestLoading(true);

      const response = await axios.post("/api/rent", {
        itemId: productDetails.id,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        cost:
          ((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1) *
          productDetails.rent_amount,
      });

      toast("Request for rent sent to the owner successfully.");
      setRequest(true);
      console.log("Request response:", response.data);
    } catch (e) {
      const error = e as AxiosError;
      if (error.response?.status === 401) {
        window.location.href = "/api/auth/signin";
      } else {
        console.error("Error sending rent request:", error);
        toast("Failed to send the rent request. Please try again.");
      }
    } finally {
      setRequestLoading(false);
    }
  };

  return (
    <Suspense>
      <div className="min-h-screen flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable
          />
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
                      <div>
                        Selected Range: {startDate.toLocaleDateString()} -{" "}
                        {endDate.toLocaleDateString()} <br />
                        Total Days:{" "}
                        {(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1} days
                        <p>
                          Total Cost:{" "}
                          $${
                            ((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1) *
                            productDetails.rent_amount
                          }
                        </p>
                      </div>
                    ) : (
                      <p>Select a date range</p>
                    )}
                  </div>
                </div>

                {request ? (
                  <h2>Request Sent</h2>
                ) : (
                  <button
                    onClick={handleRequest}
                    disabled={requestLoading}
                    className={`px-4 py-2 ${
                      requestLoading ? "bg-gray-400" : "bg-green-600"
                    } text-white rounded-md hover:bg-green-700 transition-colors mt-4`}
                  >
                    {requestLoading ? "Processing..." : "Request For Rent"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
