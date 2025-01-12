"use client";

import { useRouter } from "next/router";

interface ApprovalCardProp {
  productDataProp: {
    id: number;
    itemId: number;
    renterId: number;
    startDate: Date;
    endDate: Date;
  };
}

export function ApprovalCard({ productDataProp }: ApprovalCardProp) {
  const router = useRouter();

  const { itemId, renterId, startDate, endDate } = productDataProp;

  const handleApprove = () => {
    // Add API call for approval logic here
    console.log(`Approved request for item ${itemId} by renter ${renterId}`);
    // Redirect or update state as needed
  };

  const handleReject = () => {
    // Add API call for rejection logic here
    console.log(`Rejected request for item ${itemId} by renter ${renterId}`);
    // Redirect or update state as needed
  };

  const handleReturn = () => {
    router.push('/products')
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold">Approval Request</h2>
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
      <div>
      <button
          onClick={handleReturn}
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Return to Products Page
        </button>
      </div>
    </div>
  );
}
