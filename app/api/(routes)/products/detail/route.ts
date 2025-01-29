import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "You are not logged in!" },
      { status: 401 }
    );
  }

  const productId = req.nextUrl.searchParams.get("id");

  if (!productId || isNaN(Number(productId))) {
    return NextResponse.json(
      { message: "Invalid or missing product ID" },
      { status: 400 }
    );
  }

  try {
    const product = await prisma.items.findUnique({
      where: { id: parseInt(productId, 10) },
      include: {
        User: true,
        Reviews: true,
      },
    });

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error("Error fetching product:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { message: "An error occurred while fetching the product." },
      { status: 500 }
    );
  }
}
