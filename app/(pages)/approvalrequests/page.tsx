"use client"

import Navbar from "@/app/components/Navbar";
import { ApprovalCard } from "../../components/ApprovalCard";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  itemId: number;
  renterId: number;
  ownerId: number;
  cost: number;
  startDate: Date;
  endDate: Date;
  approved_status: boolean | null; // Include null for pending approvals
}

export default function ApprovalRequest() {
  const [productDetails, setProductDetails] = useState<Product[]>([]);

  useEffect(() => {
    const fetchApprovalRequest = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/rent/approve");
        setProductDetails(data.approvalRequest);
      } catch (e) {
        const error = e as AxiosError;
        if(error.response?.status === 401){
          window.location.href = '/api/auth/signin'
        }else{
          console.log("Failed to Load the page")
        }
      }
    };

    fetchApprovalRequest();
  }, []);

  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-6">
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
    </div>
  );
}
