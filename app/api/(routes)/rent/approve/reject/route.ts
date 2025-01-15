import { authOptions } from "@/app/lib/auth";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: "You are Not Logged in!",
      },
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
        { message: "You are not authorized to reject this request" },
        { status: 403 }
      );
    }

    // Update the approved_status to false
    const updatedRequest = await prisma.rentedItem.update({
      where: { id: itemId },
      data: { approved_status: false },
    });

    return NextResponse.json({
      message: "Request rejected successfully",
      updatedRequest,
    });
  } catch (error) {
    console.error("Error rejecting rent request:", error);
    return NextResponse.json(
      { message: "An error occurred" },
      { status: 500 }
    );
  }
};
