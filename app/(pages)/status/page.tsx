"use client";

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface Product {
  id: number;
  itemId: number;
  renterId: number;
  ownerId: number;
  startDate: string;
  endDate: string;
  approved_status: boolean | null;
}

export default function ApprovalRequest() {
  const [productDetails, setProductDetails] = useState<Product[]>([]);

  useEffect(() => {
    const fetchApprovalRequest = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/rent/approve/status");
        setProductDetails(data.approvalRequest); // Extract approvalRequest from the response
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
    <div className="container mx-auto p-4">
      <ToastContainer
        position="top-right" 
        autoClose={5000}
        hideProgressBar={false} 
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
      <h1 className="text-xl font-bold mb-4">Status of Requested items:</h1>
      {productDetails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productDetails.map((product) => (
            <StatusCard key={product.id} productDataProp={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No requests found.</p>
      )}
    </div>
  );
}

interface StatusCardProps {
  productDataProp: Product;
}

function StatusCard({ productDataProp }: StatusCardProps) {
    const { itemId, renterId, startDate, endDate, approved_status } = productDataProp;
  
    const handleApproveedOK = async () => {
      try {
        await axios.post("http://localhost:3000/api/rent/approve/status/accepted", {
          itemId,
        });
        toast("You Received the item")
        console.log(`Approved request for item ${itemId} by renter ${renterId}`);
      } catch (error) {
        console.error("Error approving request:", error);
        toast("Failed to approve the request! Please try again.")
      }
    };
  
    const handleRejectedOK = async () => {
      try {
        await axios.post("http://localhost:3000/api/rent/approve/status/rejected", {
          itemId,
        });
        toast("You have Acknowledged the status.")
        console.log(`Rejected request for item ${itemId} by renter ${renterId}`);
      } catch (error) {
        console.error("Error rejecting request:", error);
        toast("Failed to reject the request")
      }
    };
  
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-semibold">Status of Requested item: </h2>
        <div className="mt-2">
          <p>
            <strong>Item ID:</strong> {itemId}
          </p>
          <p>
            <strong>Renter ID:</strong> {renterId}
          </p>
          <p>
            <strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}
          </p>
          <p>
            <strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex justify-end mt-4 gap-4">
          {approved_status === null ? (
            <span className="text-yellow-500 font-semibold">Pending</span>
          ) : (
            <button
              onClick={approved_status ? handleApproveedOK : handleRejectedOK}
              className={`py-1 px-3 rounded text-white ${
                approved_status
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              OK
            </button>
          )}
        </div>
      </div>
    );
  }
  