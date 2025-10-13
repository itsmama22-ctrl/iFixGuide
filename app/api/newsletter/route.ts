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

    // Email notification using Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      try {
        // Send notification to yourself
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'iFixGuide <onboarding@resend.dev>',
            to: ['contact.ifixguide@gmail.com'],
            subject: 'New Newsletter Subscription',
            html: `
              <h2>New Newsletter Subscriber</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Name:</strong> ${name || 'Not provided'}</p>
              <p><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
              <hr>
              <p><small>Sent from iFixGuide newsletter form</small></p>
            `,
          }),
        })

        // Send welcome email to subscriber
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'iFixGuide <onboarding@resend.dev>',
            to: [email],
            subject: 'Welcome to iFixGuide Newsletter!',
            html: `
              <h2>Welcome to iFixGuide!</h2>
              <p>Hi ${name || 'there'},</p>
              <p>Thanks for subscribing to our weekly newsletter! You'll receive:</p>
              <ul>
                <li>Latest iPhone troubleshooting guides</li>
                <li>Exclusive tips and tricks</li>
                <li>Early access to new content</li>
              </ul>
              <p>You can unsubscribe anytime by replying to this email.</p>
              <p>Best regards,<br>The iFixGuide Team</p>
              <hr>
              <p><small>iFixGuide - Expert iPhone & iOS Troubleshooting</small></p>
            `,
          }),
        })
      } catch (emailError) {
        console.error('Email sending error:', emailError)
      }
    }

    // Alternative: Store in database or spreadsheet
    // - Airtable
    // - Google Sheets API
    // - Supabase
    
    // Log subscription for backup
    console.log('Newsletter subscription:', {
      email,
      name,
      timestamp: new Date().toISOString(),
    })

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
