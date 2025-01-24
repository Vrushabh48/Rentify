"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../db";

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
      return NextResponse.json(
          { message: "You are not logged in!" },
          { status: 401 } // Unauthorized
      );
  }

  const userId = parseInt(session.user.id, 10);

  try {
      const profile = await prisma.user.findUnique({
          where: {
              id: userId,
          },
      });

      if (!profile) {
          return NextResponse.json(
              { message: "Profile not found." },
              { status: 404 } // Not Found
          );
      }

      return NextResponse.json(
          { profile },
          { status: 200 } // OK
      );
  } catch (error) {
      console.error("Error fetching profile:", error);

      return NextResponse.json(
          { message: "An error occurred while fetching the profile." },
          { status: 500 } // Internal Server Error
      );
  }
};

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
      return NextResponse.json(
          { message: "You are not logged in!" },
          { status: 401 } // Unauthorized
      );
  }

  try {
      const body = await req.json();
      const { profile } = body;

      if (!profile) {
          return NextResponse.json(
              { message: "Invalid request. Profile data is required." },
              { status: 400 } // Bad Request
          );
      }

      const userId = parseInt(session.user.id, 10); // Ensure ID is a number

      const update = await prisma.user.update({
          where: {
              id: userId,
          },
          data: profile, // Ensure profile matches Prisma schema
      });

      console.log("Profile updated:", update);

      return NextResponse.json(
          {
              message: "Profile updated successfully",
              profile: update,
          },
          { status: 200 } // OK
      );
  } catch (error) {
      console.error("Error updating profile:", error);

      return NextResponse.json(
          { message: "An error occurred while updating the profile." },
          { status: 500 } // Internal Server Error
      );
  }
};
