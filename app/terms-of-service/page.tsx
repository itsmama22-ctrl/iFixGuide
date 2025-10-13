import { generateSEO } from '@/utils/seo'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = generateSEO({
  title: 'Terms of Service - iFixGuide',
  description: 'Read our terms of service to understand the rules and regulations for using the iFixGuide website.',
  url: '/terms-of-service',
})

export default function TermsOfService() {
  return (
    <div className="bg-white py-12">
      <div className="container-custom max-w-4xl">
        <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms-of-service' }]} />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose-custom">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using iFixGuide ("Website"), you agree to be bound by these Terms 
            of Service ("Terms"). If you disagree with any part of these terms, you may not 
            access the Website.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information and content) 
            on iFixGuide for personal, non-commercial use only. This is the grant of a license, 
            not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software on the Website</li>
            <li>Remove any copyright or proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            The materials on iFixGuide are provided on an 'as is' basis. iFixGuide makes no 
            warranties, expressed or implied, and hereby disclaims and negates all other 
            warranties including, without limitation:
          </p>
          <ul>
            <li>Implied warranties or conditions of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement of intellectual property</li>
          </ul>

          <h3>Device Repair Disclaimer</h3>
          <p>
            The troubleshooting guides and solutions provided on this Website are for 
            informational purposes only. We are not responsible for any damage to your device, 
            data loss, or other issues that may result from following our guides. Always backup 
            your data before attempting any troubleshooting steps.
          </p>

          <h3>Professional Advice Disclaimer</h3>
          <p>
            iFixGuide does not provide professional technical support or repair services. 
            For complex issues or hardware problems, we recommend contacting Apple Support 
            or a certified Apple repair center.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall iFixGuide or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business 
            interruption) arising out of the use or inability to use the materials on iFixGuide, 
            even if iFixGuide or an authorized representative has been notified orally or in 
            writing of the possibility of such damage.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on iFixGuide could include technical, typographical, or 
            photographic errors. iFixGuide does not warrant that any of the materials on its 
            Website are accurate, complete, or current. iFixGuide may make changes to the 
            materials at any time without notice.
          </p>

          <h2>Links to Third-Party Sites</h2>
          <p>
            iFixGuide has not reviewed all of the sites linked to its Website and is not 
            responsible for the contents of any such linked site. The inclusion of any link 
            does not imply endorsement by iFixGuide. Use of any such linked website is at the 
            user's own risk.
          </p>

          <h2>User Content</h2>
          <p>
            If you submit comments, feedback, or other content to iFixGuide, you grant us a 
            non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and 
            display that content.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this Website, including text, graphics, logos, images, and software, 
            is the property of iFixGuide or its content suppliers and is protected by 
            international copyright laws.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            iFixGuide may contain affiliate links to products or services. We may earn a 
            commission if you make a purchase through these links, at no additional cost to you.
          </p>

          <h2>Advertising</h2>
          <p>
            This Website may display advertisements provided by Google AdSense and other 
            advertising networks. These ads may use cookies and other tracking technologies 
            to serve relevant advertisements.
          </p>

          <h2>Modifications</h2>
          <p>
            iFixGuide may revise these Terms of Service at any time without notice. By using 
            this Website, you agree to be bound by the current version of these Terms of Service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the 
            laws of the jurisdiction in which iFixGuide operates, and you irrevocably submit 
            to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>Trademark Notice</h2>
          <p>
            iPhone, iOS, iPad, and Apple are trademarks of Apple Inc., registered in the U.S. 
            and other countries. iFixGuide is not affiliated with, endorsed by, or connected 
            to Apple Inc.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
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

