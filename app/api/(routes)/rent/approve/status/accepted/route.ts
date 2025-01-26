import { authOptions } from "@/app/lib/auth";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "You are not signed in!" },
      { status: 401 }
    );
  }

  try {
    // Parse the request body
    const { itemId } = await req.json();

    // Validate the input
    if (!itemId) {
      return NextResponse.json(
        { message: "Invalid or missing data!" },
        { status: 400 }
      );
    }

    // Find the item by ID
    const item = await prisma.items.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      return NextResponse.json(
        { message: "Item not found!" },
        { status: 404 }
      );
    }

    // Update the item's approval status
    const updatedItem = await prisma.items.update({
      where: { id: itemId },
      data: { isRented: true  },
    });

    // Return a success response
    return NextResponse.json({
      message: `You collected the Item`,
      updatedItem,
    });
  } catch (error: unknown) {
    console.error("Error fetching approval requests:", error instanceof Error ? error.message : error);
    return NextResponse.json(
        { message: "An error occurred." },
        { status: 500 }
    );
  }
};
