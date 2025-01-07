// pages/api/products/[id].ts
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({
      message: "You are Not logged in!",
    });
  }

  const { id } = params;

  try {
    const product = await prisma.items.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        User: true, // Include user details if needed
        Reviews: true, // Include reviews if needed
      },
    });

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching product details" },
      { status: 500 }
    );
  }
};
