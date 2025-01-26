"use client";
import Navbar from "@/app/components/Navbar";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface Product {
  id: number;
  itemId: number;
  renterId: number;
  ownerId: number;
  startDate: Date;
  endDate: Date;
  cost: number;
  approved_status: boolean | null;
}

export default function Products() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/rent/rentedproducts");
        const products = data.products || [];
        setProductData(products);
        localStorage.setItem("productData", JSON.stringify(products));
        setError(null); // Clear any previous errors
      } catch (e) {
        const error = e as AxiosError;

        if (error.response?.status === 401) {
    // Redirect to sign-in page if unauthorized
    window.location.href = "/api/auth/signin";
  } else {
    console.error("You are not logged in!", error);
  }
        setError("Failed to load rented items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchDataWithCache = () => {
      const cachedData = localStorage.getItem("productData");
      if (cachedData) {
        setProductData(JSON.parse(cachedData)); // Use cached data for initial render
      }
      fetchProducts(); // Fetch and update data immediately
    };

    fetchDataWithCache(); // Initial fetch
    const intervalId = setInterval(fetchProducts, 60000); // Fetch every 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <ToastContainer
        position="top-right" // Adjust position (e.g., top-left, bottom-right)
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false} // Show or hide progress bar
        newestOnTop={true} // Display newest toast on top
        closeOnClick
        pauseOnHover
        draggable
      />
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : productData.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No rented items available.</p>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { itemId, renterId, ownerId, startDate, endDate, cost } = product;
  const [marking, setMarking] = useState(false);

  const handleClick = async () => {
    setMarking(true); // Show loader
    try {
      const update = await axios.post("http://localhost:3000/api/rent/mark-received", {
        itemId: product.itemId,
        cost: product.cost,
      });
      console.log(update);
      toast("You have now received the item back.")
    } catch (error) {
      console.log(error);
      toast("Connection Error! Please try again!")
    } finally {
      setMarking(false); // Hide loader
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-semibold lg:text-3xl pb-3">My Rented Products</h1>
      <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Item ID: {itemId}</h2>
        <p className="text-sm text-gray-600 mb-1">
          Renter ID: <span className="font-medium">{renterId}</span>
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Owner ID: <span className="font-medium">{ownerId}</span>
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Cost for Rent: <span className="font-medium">${cost.toFixed(2)}</span>
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Start Date: <span className="font-medium">{new Date(startDate).toLocaleDateString()}</span>
        </p>
        <p className="text-sm text-gray-600 mb-4">
          End Date: <span className="font-medium">{new Date(endDate).toLocaleDateString()}</span>
        </p>
        <div>
          <button
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50"
            onClick={handleClick}
            disabled={marking} // Disable button when loading
          >
            {marking ? "Processing..." : "Mark Item as Received"}
          </button>
        </div>
      </div>
    </div>
  );
}
