"use client"

import { ApprovalCard } from "../../components/ApprovalCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  itemId: number;
  renterId: number;
  ownerId: number;
  startDate: Date; // Keep this as string if dates are in ISO format
  endDate: Date;
  approved_status: boolean | null; // Include null for pending approvals
}

export default function ApprovalRequest() {
  const [productDetails, setProductDetails] = useState<Product[]>([]);

  useEffect(() => {
    const fetchApprovalRequest = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/rent/approve");
        setProductDetails(data.approvalRequest); // Extract approvalRequest from the response
      } catch (error) {
        console.log("Error Fetching the Approval Requests", error);
      }
    };

    fetchApprovalRequest();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Approval Requests</h1>
      {productDetails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productDetails.map((product) => (
            <ApprovalCard key={product.id} productDataProp={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No approval requests found.</p>
      )}
    </div>
  );
}
