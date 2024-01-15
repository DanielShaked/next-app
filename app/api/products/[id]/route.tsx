import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";



export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const product = await prisma.products.findUnique({
        where: { id: +params.id }
    })
    if (!product)
        return NextResponse.json({ error: 'product Not Found' }, { status: 404 })
    return NextResponse.json(product)
}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })
    const product = await prisma.products.findUnique({
        where: { id: +params.id }
    })
    if (!product)
        return NextResponse.json({ error: 'product not found' }, { status: 404 })
    const updatedProduct = await prisma.products.update({
        where: { id: product.id },
        data: {
            ...product,
            price: body.price,
            name: body.name
        }
    })
    return NextResponse.json(updatedProduct)
}


export async function DELETE(request: NextRequest,
    { params }: { params: { id: string } }) {

    const product = await prisma.products.findUnique({
        where: { id: +params.id }
    })
    if (!product) return NextResponse.json({ error: 'product not found' }, { status: 404 })
    await prisma.products.delete({
        where: { id: product.id }
    })
    return NextResponse.json({})

}