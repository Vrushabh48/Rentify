"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface ProductDetails {
  id: number;
  name: string;
  category: string;
  description: string;
  rent_amount: number;
  address: string;
  deposit: number;
  location: string;
  imgLink?: string; // If your product has an image
}

export default function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams(); // Use the `useParams` hook

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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Display product image if available */}
      {productDetails.imgLink && (
        <div className="mb-6 relative w-full h-64">
          <Image
            src={productDetails.imgLink} // Fixed to reference productDetails.imgLink
            alt={productDetails.name}
            layout="fill" // Ensures the image covers the container
            objectFit="cover" // Ensures proper scaling and cropping of the image
            className="rounded-t-lg" // Applies rounded corners to the top of the card
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
      
      {/* Optional button or navigation to take action */}
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}
