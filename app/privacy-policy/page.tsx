import { generateSEO } from '@/lib/seo'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = generateSEO({
  title: 'Privacy Policy - iFixGuide',
  description: 'Read our privacy policy to learn how iFixGuide collects, uses, and protects your personal information.',
  url: '/privacy-policy',
})

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-12">
      <div className="container-custom max-w-4xl">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose-custom">
          <h2>Introduction</h2>
          <p>
            iFixGuide ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website ifixguide.com.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain information about 
            your device, including:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Device identifiers</li>
          </ul>

          <h3>Information You Provide</h3>
          <p>
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our contact form</li>
            <li>Leave comments or feedback</li>
          </ul>
          <p>This information may include your name, email address, and message content.</p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our website</li>
            <li>Send you newsletters and updates (if you've subscribed)</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze website usage and trends</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website 
            and store certain information. You can instruct your browser to refuse all cookies 
            or to indicate when a cookie is being sent.
          </p>

          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to analyze website traffic and usage patterns. Google 
            Analytics uses cookies to collect information such as how often users visit the 
            site, what pages they visit, and what other sites they used prior to coming to 
            this site. You can opt-out of Google Analytics by installing the Google Analytics 
            Opt-out Browser Add-on.
          </p>

          <h3>Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements on our website. Google and its 
            partners use cookies to serve ads based on your prior visits to our website or 
            other websites. You can opt out of personalized advertising by visiting 
            Ads Settings.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to:
          </p>
          <ul>
            <li>Facilitate our website</li>
            <li>Provide analytics services</li>
            <li>Deliver advertisements</li>
            <li>Send newsletters</li>
          </ul>
          <p>
            These third parties have access to your information only to perform specific tasks 
            on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect 
            your personal information. However, no method of transmission over the Internet or 
            electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal 
            information, including:
          </p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to rectify inaccurate information</li>
            <li>The right to erase your personal information</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the "Last 
            updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: contact.ifixguide@gmail.com</li>
            <li>Contact Page: <a href="/contact">/contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

