import { generateSEO } from '@/utils/seo'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata = generateSEO({
  title: 'Contact Us - iFixGuide',
  description: 'Get in touch with the iFixGuide team. We welcome your questions, feedback, and suggestions for new troubleshooting guides.',
  url: '/contact',
})

export default function Contact() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom max-w-4xl">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <p className="text-lg text-gray-600 mb-8">
            Have a question, suggestion, or feedback? We'd love to hear from you! 
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <ContactForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">contact.ifixguide@gmail.com</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-600 text-sm">Within 24-48 hours</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Feedback</h3>
            <p className="text-gray-600 text-sm">We welcome suggestions</p>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Before You Contact Us</h3>
          <p className="text-gray-600 mb-4">
            Looking for troubleshooting help? Browse our comprehensive guides first:
          </p>
          <ul className="space-y-2">
            <li>
              <a href="/troubleshooting/iphone" className="text-primary-600 hover:text-primary-700">
                → iPhone Troubleshooting Guides
              </a>
            </li>
            <li>
              <a href="/troubleshooting/battery" className="text-primary-600 hover:text-primary-700">
                → Battery Issues
              </a>
            </li>
            <li>
              <a href="/troubleshooting/connectivity" className="text-primary-600 hover:text-primary-700">
                → Connectivity Problems
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

