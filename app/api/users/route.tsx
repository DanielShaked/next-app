import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany({})
    console.log('users', users)
    return NextResponse.json(users);
}


export async function POST(request: NextRequest) {
    console.log('HI!');

    const body = await request.json()
    //Validate
    const validation = schema.safeParse(body)
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })
    const user = await prisma.user.findUnique({
        where: { email: body.email }
    });
    if (user)
        return NextResponse.json({ error: 'user already exist' }, { status: 400 })

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(newUser, { status: 201 })
}