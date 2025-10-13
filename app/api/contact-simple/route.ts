import { NextResponse } from 'next/server'

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

    // Option 1: Use Web3Forms (Easiest - no API key in code!)
    // Sign up at https://web3forms.com (free, instant)
    // Get access key, replace YOUR_ACCESS_KEY below
    
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY
    
    if (WEB3FORMS_KEY) {
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_KEY)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('subject', `iFixGuide Contact: ${subject}`)
      formData.append('message', message)
      formData.append('redirect', 'https://ifixguide.vercel.app/contact')
      formData.append('to', 'contact.ifixguide@gmail.com')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      
      if (result.success) {
        console.log('Email sent successfully via Web3Forms')
        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
      }
    }

    // Fallback: Log to console
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

