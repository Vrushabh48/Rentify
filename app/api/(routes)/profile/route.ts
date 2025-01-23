"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { NextRequest, NextResponse } from "next/server";
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


export const POST = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    if(!session){
        return NextResponse.json({
            message: "You are not logged in!",
        },{
            status: 401
        })
    }

    try {
        const body = await req.json();
        const { profile } = body;
  
        // Merge the updated profile data
        const update = await prisma.user.update({
            where: {
                id: parseInt(session.user.id)
            },
            data: profile
        })

        console.log(update);
  
        return NextResponse.json(
            {
              message: 'Profile updated successfully',
              profile: update,
            },
            { status: 200 }
          );
      } catch (error) {
        console.log(error);
      }

}