import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Implement your newsletter service integration
    // Popular options:
    // - Mailchimp
    // - ConvertKit
    // - SendGrid
    // - Buttondown
    // - Substack

    // For now, we'll log the subscription
    console.log('Newsletter subscription:', {
      email,
      name,
      timestamp: new Date().toISOString(),
    })

    // You can also save to a database or send to a webhook
    
    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

