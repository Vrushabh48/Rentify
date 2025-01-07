"use client";

import { useRouter } from "next/navigation";

interface ProductCardProps {
  productDataprop: {
    id: number;
    name: string;
    description: string;
    rent_amount: number;
    location: string;
  };
}

export function ProductCard({ productDataprop }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the dynamic route for this product
    router.push(`/products/${productDataprop.id}`);
  };

  const { name, description, rent_amount, location } = productDataprop;

  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "1rem",
        cursor: "pointer",
        transition: "box-shadow 0.2s ease-in-out",
      }}
      className="hover:shadow-lg" // Add hover effect
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Rent Amount: ${rent_amount}</p>
      <p>Location: {location}</p>
    </div>
  );
}
