"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { NextResponse } from "next/server";
import prisma from "../../../../db";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: "You are not logged in",
      },
      { status: 401 } // Explicit status for unauthorized
    );
  }

  const userId = parseInt(session.user.id, 10); // Ensure the ID is a number
  const profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!profile) {
    return NextResponse.json(
      {
        message: "Profile not found",
      },
      { status: 404 } // Explicit status for not found
    );
  }

  return NextResponse.json({ profile }); // Correct API response format
};
