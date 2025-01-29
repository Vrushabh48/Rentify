import { authOptions } from "@/app/lib/auth";
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from "next/server";
import {prisma} from '../../../lib/prisma'

export const POST = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            { message: "You are Not Logged In." },
            { status: 401 } // Unauthorized
        );
    }

    try {
        const body = await req.json();
        const { productData } = body;

        const product = await prisma.items.create({
            data: {
                name: productData.name,
                category: productData.category,
                description: productData.description,
                rent_amount: parseInt(productData.rent_amount), // Ensure rent_amount is an integer
                location: productData.location,
                imgLink: productData.imgLink,
                address: productData.address,
                deposit: parseInt(productData.deposit), // Ensure deposit is an integer
                UserId: parseInt(session.user.id), // Ensure UserId is parsed as an integer
                ...(productData.min_days && { min_days: parseInt(productData.min_days) }),
            },
        });

        console.log(product);
        return NextResponse.json(
            { message: "Product Added Successfully", productData: product },
            { status: 201 } // Created
        );
    } catch (e) {
        console.error("Error adding product:", e);
        return NextResponse.json(
            { message: "An error occurred while adding the product." },
            { status: 500 } // Internal Server Error
        );
    }
};

export const GET = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json(
            { message: "You are Not logged in!" },
            { status: 401 } // Unauthorized
        );
    }

    try {
        const products = await prisma.items.findMany();
        return NextResponse.json(
            { products },
            { status: 200 } // OK
        );
    } catch (error: unknown) {
        console.error("Error fetching approval requests:", error instanceof Error ? error.message : error);
        return NextResponse.json(
            { message: "An error occurred while fetching Products." },
            { status: 500 }
        );
    }
};
