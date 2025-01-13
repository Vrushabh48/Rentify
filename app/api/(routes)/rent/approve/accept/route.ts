import { authOptions } from "@/app/lib/auth";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "You are Not Logged in!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const { itemId } = body;

    // Fetch the rent request
    const rentRequest = await prisma.rentedItem.findUnique({
      where: { id: itemId },
    });

    if (!rentRequest) {
      return NextResponse.json(
        { message: "Rent request not found" },
        { status: 404 }
      );
    }

    // Check if the logged-in user is the owner of the item
    if (rentRequest.ownerId !== parseInt(session.user.id)) {
      return NextResponse.json(
        { message: "You are not authorized to approve this request" },
        { status: 403 }
      );
    }

    // Update the approved_status to true
    const updatedRequest = await prisma.rentedItem.update({
      where: { id: itemId },
      data: { approved_status: true },
    });

    // Update isRented status for the item
    const isRentedStatus = await prisma.items.update({
      where: { id: updatedRequest.itemId },
      data: { isRented: true },
    });

    return NextResponse.json({
      message: "Request approved successfully",
      updatedRequest,
      isRentedStatus,
    });
  } catch (error) {
    console.error("Error approving rent request:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the request" },
      { status: 500 }
    );
  }
};
