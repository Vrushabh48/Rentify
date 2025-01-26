import { authOptions } from "@/app/lib/auth"
import prisma from "@/db";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";



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
        const products = await prisma.rentedItem.findMany({
          where:{
            approved_status: true
          }
        });
        return NextResponse.json(
            {products},
            {status: 200} //OK
        );
    } catch (error: unknown) {
      console.error("Error fetching approval requests:", error instanceof Error ? error.message : error);
      return NextResponse.json(
          { message: "An error occurred." },
          { status: 500 }
      );
    }
}