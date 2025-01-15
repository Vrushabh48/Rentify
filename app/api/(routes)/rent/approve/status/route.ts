"use server";

import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/db";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json(
      { message: "You are not logged in or session is invalid." },
      { status: 401 }
    );
  }

  const renterId = parseInt(session.user.id, 10);
  if (isNaN(renterId)) {
    return NextResponse.json(
      { message: "Invalid user ID in session." },
      { status: 400 }
    );
  }

  try {
    const approvalRequest = await prisma.rentedItem.findMany({
      where: {
        renterId
      },
    });

    return NextResponse.json({ approvalRequest });
  } catch (error) {
    console.error("Error fetching approval requests:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching approval requests." },
      { status: 500 }
    );
  }
};
