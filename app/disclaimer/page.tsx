import { generateSEO } from '@/utils/seo'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = generateSEO({
  title: 'Disclaimer - iFixGuide',
  description: 'Read important disclaimers about using iFixGuide troubleshooting guides and information.',
  url: '/disclaimer',
})

export default function Disclaimer() {
  return (
    <div className="bg-white py-12">
      <div className="container-custom max-w-4xl">
        <Breadcrumbs items={[{ name: 'Disclaimer', href: '/disclaimer' }]} />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose-custom">
          <h2>General Disclaimer</h2>
          <p>
            The information provided by iFixGuide ("we," "us," or "our") on ifixguide.com 
            (the "Website") is for general informational purposes only. All information on 
            the Website is provided in good faith; however, we make no representation or 
            warranty of any kind, express or implied, regarding the accuracy, adequacy, 
            validity, reliability, availability, or completeness of any information on the Website.
          </p>

          <h2>Device Repair and Troubleshooting Disclaimer</h2>
          <p>
            Under no circumstance shall we have any liability to you for any loss or damage 
            of any kind incurred as a result of the use of the Website or reliance on any 
            information provided on the Website. Your use of the Website and your reliance on 
            any information on the Website is solely at your own risk.
          </p>

          <h3>Risk of Device Damage</h3>
          <p>
            Following troubleshooting steps and repair guides involves inherent risks, including:
          </p>
          <ul>
            <li>Physical damage to your device</li>
            <li>Data loss or corruption</li>
            <li>Voiding manufacturer warranties</li>
            <li>Software malfunctions</li>
            <li>Personal injury (in rare cases)</li>
          </ul>
          <p>
            <strong>Always backup your data before attempting any troubleshooting procedures.</strong>
          </p>

          <h3>Professional Service Recommendation</h3>
          <p>
            For complex hardware issues, warranty-covered repairs, or if you're uncomfortable 
            performing the suggested troubleshooting steps, we strongly recommend contacting:
          </p>
          <ul>
            <li>Apple Support or Apple Store</li>
            <li>Authorized Apple Service Provider</li>
            <li>Certified repair technician</li>
          </ul>

          <h2>Not Professional Advice</h2>
          <p>
            The Website provides informational content only and is not intended to provide 
            professional technical advice. You should not rely upon the information on the 
            Website as a basis for making decisions without consulting qualified professionals.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            iFixGuide participates in various affiliate marketing programs, which means we may 
            earn commissions on products purchased through our links to retailer sites. This 
            helps support our website and allows us to continue providing free troubleshooting 
            guides.
          </p>
          <p>
            Our affiliate relationships do not influence our editorial content or recommendations. 
            We only recommend products and services that we believe will be helpful to our readers.
          </p>

          <h2>Advertising Disclosure</h2>
          <p>
            This Website uses Google AdSense and may use other advertising networks to display 
            advertisements. These advertisements may be:
          </p>
          <ul>
            <li>Based on your browsing history and interests</li>
            <li>Shown before, during, or after content</li>
            <li>Clearly marked as advertisements</li>
          </ul>
          <p>
            We do not control the content of advertisements displayed on our Website. The 
            appearance of ads does not constitute an endorsement of the advertised products or 
            services.
          </p>

          <h2>External Links Disclaimer</h2>
          <p>
            The Website may contain links to external websites that are not provided or 
            maintained by us. We do not guarantee the accuracy, relevance, timeliness, or 
            completeness of any information on these external websites.
          </p>

          <h2>No Warranty Disclaimer</h2>
          <p>
            The Website is provided on an "as is" and "as available" basis. We make no 
            warranties, expressed or implied, and hereby disclaim all warranties including, 
            but not limited to:
          </p>
          <ul>
            <li>Warranties of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Compatibility with your specific device or iOS version</li>
            <li>Accuracy or completeness of information</li>
          </ul>

          <h2>Apple Inc. Affiliation Disclaimer</h2>
          <p>
            iFixGuide is an independent resource and is NOT:
          </p>
          <ul>
            <li>Affiliated with Apple Inc.</li>
            <li>Endorsed by Apple Inc.</li>
            <li>Connected to Apple Inc. in any way</li>
            <li>An authorized Apple service provider</li>
          </ul>
          <p>
            iPhone, iOS, iPad, Mac, Apple Watch, and all related marks are trademarks of 
            Apple Inc., registered in the U.S. and other countries and regions. All product 
            names, logos, and brands are property of their respective owners.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, iFixGuide shall not be liable for any 
            indirect, incidental, special, consequential, or punitive damages, or any loss of 
            profits or revenues, whether incurred directly or indirectly, or any loss of data, 
            use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your use or inability to use the Website</li>
            <li>Any conduct or content of any third party on the Website</li>
            <li>Any content obtained from the Website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>

          <h2>Updates to Disclaimer</h2>
          <p>
            We reserve the right to make changes to this Disclaimer at any time. Your continued 
            use of the Website following the posting of changes constitutes your acceptance of 
            such changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at:
          </p>
          <ul>
            <li>Email: legal@ifixguide.com</li>
            <li>Contact Page: <a href="/contact">/contact</a></li>
          </ul>

          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">⚠️ Important Reminder</h3>
            <p className="text-gray-700 mb-0">
              Always backup your iPhone data before attempting any troubleshooting steps. 
              If you're unsure about any procedure, contact Apple Support or visit an Apple Store.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

