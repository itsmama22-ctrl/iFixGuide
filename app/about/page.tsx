import { generateSEO } from '@/utils/seo'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = generateSEO({
  title: 'About Us - iFixGuide',
  description: 'Learn about iFixGuide, your trusted source for iPhone and iOS troubleshooting guides. Our mission is to help users solve device problems quickly and effectively.',
  url: '/about',
})

export default function About() {
  return (
    <div className="bg-white py-12">
      <div className="container-custom max-w-4xl">
        <Breadcrumbs items={[{ name: 'About Us', href: '/about' }]} />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About iFixGuide</h1>
        
        <div className="prose-custom">
          <p className="text-xl text-gray-600 mb-8">
            Your trusted source for iPhone and iOS troubleshooting solutions.
          </p>

          <h2>Our Mission</h2>
          <p>
            At iFixGuide, we believe that technology should work for you, not against you. 
            Our mission is to empower iPhone and iOS users with the knowledge and tools they 
            need to troubleshoot and fix common device issues quickly and effectively.
          </p>

          <h2>What We Do</h2>
          <p>
            We create comprehensive, easy-to-follow troubleshooting guides that cover a wide 
            range of iPhone and iOS problems. From battery drain issues to connectivity problems, 
            camera glitches to app crashes, we've got you covered with step-by-step solutions.
          </p>

          <h2>Our Approach</h2>
          <p>
            Every guide on iFixGuide is:
          </p>
          <ul>
            <li><strong>Thoroughly researched</strong> - We test every solution before publishing</li>
            <li><strong>Easy to follow</strong> - Clear, step-by-step instructions with helpful screenshots</li>
            <li><strong>Regularly updated</strong> - We keep our content current with the latest iOS versions</li>
            <li><strong>User-focused</strong> - Written in plain language, avoiding technical jargon</li>
          </ul>

          <h2>Who We Are</h2>
          <p>
            We're a team of iOS enthusiasts and tech experts passionate about helping people 
            get the most out of their devices. Our team has years of combined experience in 
            iOS troubleshooting, device repair, and technical support.
          </p>

          <h2>Why Trust Us?</h2>
          <p>
            Unlike generic tech support sites, we focus exclusively on iPhone and iOS issues. 
            This specialized focus allows us to provide more in-depth, accurate, and effective 
            solutions. We don't just copy information from elsewhere – we test and verify every 
            fix we recommend.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We're committed to:
          </p>
          <ul>
            <li>Publishing only original, high-quality content</li>
            <li>Maintaining an ad-free, user-friendly experience</li>
            <li>Protecting your privacy and data</li>
            <li>Continuously improving our guides based on user feedback</li>
            <li>Staying independent and unbiased in our recommendations</li>
          </ul>

          <h2>Get in Touch</h2>
          <p>
            Have a question or suggestion? We'd love to hear from you! Visit our{' '}
            <a href="/contact">contact page</a> to get in touch with our team.
          </p>

          <h2>Disclaimer</h2>
          <p>
            iFixGuide is an independent resource and is not affiliated with, endorsed by, 
            or connected to Apple Inc. iPhone and iOS are trademarks of Apple Inc. All 
            product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>
    </div>
  )
}

