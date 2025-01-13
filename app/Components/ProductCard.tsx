"use client";

import { useRouter } from "next/navigation";

interface ProductCardProps {
  productDataprop: {
    id: number;
    name: string;
    category: string;
    description: string;
    imgLink: string;
    address: string;
    deposit: number; // Change to number
    rent_amount: number;
    location: string;
    isRented: boolean
  };
}


export function ProductCard({ productDataprop }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the dynamic route for this product
    router.push(`/products/${productDataprop.id}`);
  };

  const { name, description, rent_amount, location, imgLink, isRented } = productDataprop;

  return (
    <div
      onClick={handleClick}
      className="max-w-sm w-full bg-emerald-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <div className="relative w-full h-48 items-center">
      <img src={imgLink} className="h-[200px] w-[400px]" alt="camera Archives - TrickyPhotoshop" aria-hidden="false" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900">Rent: ${rent_amount}</p>
          <p className="text-sm text-gray-500">Location: {location}</p>
        </div>
      </div>
      <div>
  {isRented ? (
    // Content to render if `isRented` is true
    <p>This item is currently rented.</p>
  ) : (
    // Content to render if `isRented` is false
    <p>This item is available for rent.</p>
  )}
</div>

      <div className="bg-gray-100 p-4">
        <p className="text-sm text-gray-500">{productDataprop.category}</p>
      </div>
    </div>
  );
}
