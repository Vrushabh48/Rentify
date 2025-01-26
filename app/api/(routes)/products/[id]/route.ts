import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {prisma} from '../../../../lib/prisma'

export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({
      message: "You are not logged in!",
    }, { status: 401 });
  }

  // Await params before destructuring
  const { id } = await context.params;

  try {
    const product = await prisma.items.findUnique({
      where: { id: parseInt(id, 10) }, // Ensure ID is parsed as an integer
      include: {
        User: true,     // Include user details if needed
        Reviews: true,  // Include reviews if needed
      },
    });

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error: unknown) {
    console.error("Error fetching approval requests:", error instanceof Error ? error.message : error);
    return NextResponse.json(
        { message: "An error occurred while fetching Product." },
        { status: 500 }
    );
  }
};
