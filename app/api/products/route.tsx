import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany({})
    return NextResponse.json(products);
}


export async function POST(request: NextRequest) {
    console.log('HI!');

    const body = await request.json()
    //Validate
    const validation = schema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

    console.log('hiiii');

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct, { status: 201 })
}