import { NextRequest, NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
    }

    const client = await clerkClient()

    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        access: true,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('activate-user error', error)
    return NextResponse.json({ error: 'Activation failed' }, { status: 500 })
  }
}
