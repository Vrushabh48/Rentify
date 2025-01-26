import { authOptions } from "@/app/lib/auth";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: "You are not logged in!",
      },
      { status: 401 }
    );
  }

  const { itemId, cost } = await req.json();
  const userId = session.user.id;

  if (!itemId) {
    return NextResponse.json(
      {
        message: "Item ID is required!",
      },
      { status: 400 }
    );
  }

  try {

    const updatedItem = await prisma.items.update({
      where: {
        id: parseInt(itemId),
      },
      data: {
        isRented: false,
        rentedfor:{
            increment: 1
        },
        earnings:{
          increment:cost
        }
      },
    });

    // Remove the item from the rentedItems table
    await prisma.rentedItem.deleteMany({
      where: {
        itemId: parseInt(itemId),
        ownerId: parseInt(userId), // Ensure the user owns the rented item
      },
    });

    // Update the item in the items table to set isRented to false

    return NextResponse.json(
      {
        message: "Item returned successfully!",
        updatedItem,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error fetching approval requests:", error instanceof Error ? error.message : error);
    return NextResponse.json(
        { message: "An error occurred." },
        { status: 500 }
    );
  }
};
