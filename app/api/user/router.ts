import {getServerSession} from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/app/lib/auth'

export const GET = async () => {
    const session = await getServerSession(authOptions);

    if(session && session.user){
        return NextResponse.json({
            user: session.user
        })
    }

    return NextResponse.json({
        message: "You are Not Logged In!"
    },{status: 403})
}