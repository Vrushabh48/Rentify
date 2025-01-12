"use server";

import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

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
    const { rentedItemId } = body;

    // Fetch the rent request
    const rentRequest = await prisma.rentedItem.findUnique({
      where: { id: rentedItemId },
    });

    if (!rentRequest) {
      return NextResponse.json(
        { message: "Rent request not found" },
        { status: 404 }
      );
    }

    // Check if the logged-in user is the owner of the item
    if (rentRequest.renterId !== parseInt(session.user.id)) {
      return NextResponse.json(
        { message: "You are not authorized to approve this request" },
        { status: 403 }
      );
    }

    // Update the approved_status to true
    const updatedRequest = await prisma.rentedItem.update({
      where: { id: rentedItemId },
      data: { approved_status: true },
    });

    const isrentedStatus = await prisma.items.update({
      where: {id: updatedRequest.itemId},
      data: {isRented: true}
    })

    return NextResponse.json({
      message: "Rent request approved successfully",
      updatedRequest,
      isrentedStatus
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred" },
      { status: 500 }
    );
  }
};


export const GET = async () => {
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
  const approvalRequest = await prisma.rentedItem.findMany({
    where: {renterId: parseInt(session.user.id),
      approved_status:false
    }
  })

  return NextResponse.json(
    {approvalRequest}
  )
 } catch (error) {
  console.log(error);
  return NextResponse.json(
    {message: "An Error Occured"},
    { status: 500}
  );
 }
  
}