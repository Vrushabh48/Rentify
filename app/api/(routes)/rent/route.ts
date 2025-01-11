"use server";

import { authOptions } from "@/app/lib/auth";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  // Check if the user is logged in
  if (!session) {
    return NextResponse.json(
      {
        message: "You are Not Logged in!",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const body = await req.json();
    const { itemId, startDate, endDate } = body;

    // Validate required fields
    if (!itemId || !startDate || !endDate) {
      return NextResponse.json(
        {
          message: "itemId, startDate, and endDate are required.",
        },
        { status: 400 }
      );
    }

    // Find the item by its ID
    const item = await prisma.items.findUnique({
      where: { id: itemId },
    });

    // If the item doesn't exist, return an error
    if (!item) {
      return NextResponse.json(
        {
          message: "Item not found.",
        },
        { status: 404 }
      );
    }

    // Prevent the user from renting their own item
    if (item.UserId === parseInt(session.user.id)) {
      return NextResponse.json(
        {
          message: "You cannot rent your own item.",
        },
        { status: 400 }
      );
    }

    // Create a new entry in the rentedItems table
    const rentedItem = await prisma.rentedItem.create({
      data: {
        itemId,
        renterId: parseInt(session.user.id),
        startDate: new Date(startDate), // Ensure dates are properly formatted
        endDate: new Date(endDate),     // Ensure dates are properly formatted
      },
    });

    // Respond with success and return the rented item data
    return NextResponse.json({
      message: "Rent request created successfully.",
      rentedItem,
    });
  } catch (error) {
    console.error(error);

    // Return a 500 response in case of server errors
    return NextResponse.json(
      {
        message: "An error occurred.",
      },
      { status: 500 }
    );
  }
};


export const GET = async () => {
    const session = await getServerSession(authOptions);

    if(!session){
        return NextResponse.json({
            message: "You are Not Logged in!"
        },{
            status: 404
        })
    }

    const rented_products = await prisma.rentedItem.findMany();
    return NextResponse.json({
        rented_products
    })

}
