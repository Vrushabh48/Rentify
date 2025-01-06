import { authOptions } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";


export const POST = async (req: NextRequest) => {
    const session = await getServerSession(authOptions);

    if(!session){
        return NextResponse.json({
            message: "You are Not Logged In."
        })
    }
    try {
    const body = await req.json();
    const { productData } = body; 
    const product = await prisma.items.create({
        data:{
            name: productData.name,
            description: productData.description,
            rent_amount: productData.rent_amount,
            location: productData.location,
            UserId: parseInt(session.user.id)
        }
    })

    console.log(product);
    return NextResponse.json({
        message: "Product Added Successfully",
        productData: product 
    })
    } catch (e) {
        console.log(e);
    }

}

export const GET = async () => {
    const session = await getServerSession(authOptions);

    if(!session){
        return NextResponse.json({
            message: "You are Not logged in!"
        })
    }

    try {
        const products = await prisma.items.findMany();
        return NextResponse.json({
            products
        })
    } catch (error) {
        console.log(error);
    }
}