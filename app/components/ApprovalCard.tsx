"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

interface ApprovalCardProp {
  productDataProp: {
    id: number;
    itemId: number;
    renterId: number;
    startDate: Date;
    endDate: Date;
    cost: number;
  };
}

export function ApprovalCard({ productDataProp }: ApprovalCardProp) {

  const {id, itemId, renterId, startDate, endDate, cost } = productDataProp;
  const router = useRouter();

  const handleApprove = async () => {
    try {
      await axios.post("http://localhost:3000/api/rent/approve/accept", {
       id ,
      });
      alert("Request Approved Successfully");
      console.log(`Approved request for item ${itemId} by renter ${renterId}`);
      router.push('/approvalrequests');
    } catch (error) {
      console.error("Error approving request:", error);
      alert("Failed to approve the request. Please try again.");
    }
  };
  
  
  const handleReject = async () => {
    try {
      await axios.post("http://localhost:3000/api/rent/approve/reject", {
        id,
      });
      alert("Request Rejected Successfully");
      router.push('/approvalrequests');
      console.log(`Rejected request for item ${itemId} by renter ${renterId}`);
    } catch (error) {
      console.error("Error rejecting request:", error);
      alert("Failed to reject the request. Please try again.");
    }
  };
  

  return (
    <div className="border rounded-lg p-4 shadow-xl">
      <h2 className="text-lg font-semibold">Approval Request</h2>
      <div className="mt-2">
        <p>
          <strong>Item ID:</strong> {itemId}
        </p>
        <p>
          <strong>Total Earnings: $</strong> {cost}
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
        <button
          onClick={handleApprove}
          className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
        >
          Approve
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
