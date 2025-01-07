"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface ProductDetails {
  id: number;
  name: string;
  description: string;
  rent_amount: number;
  location: string;
  imgLink?: string; // If your product has an image
}

export default function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );
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

  if (loading) return <p>Loading...</p>;

  if (!productDetails) return <p>Product not found.</p>;

  return (
    <div className="p-4">
      <h1>{productDetails.name}</h1>
      <p>{productDetails.description}</p>
      <p>Rent Amount: ${productDetails.rent_amount}</p>
      <p>Location: {productDetails.location}</p>
    </div>
  );
}
