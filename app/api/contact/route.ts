import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working' }, { status: 200 })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Email notification using Resend (Free tier: 100 emails/day)
    // Sign up at https://resend.com and get API key
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    
    if (RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'iFixGuide <onboarding@resend.dev>', // Change after domain verification
            to: ['contact.ifixguide@gmail.com'],
            subject: `Contact Form: ${subject}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Sent from iFixGuide contact form</small></p>
            `,
          }),
        })

        if (!response.ok) {
          console.error('Resend API error:', await response.text())
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Don't fail the request if email fails - still log it
      }
    }

    // Alternative: Gmail SMTP (if you prefer using Gmail directly)
    // Requires additional setup with nodemailer
    
    // Log submission for backup (always happens)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
