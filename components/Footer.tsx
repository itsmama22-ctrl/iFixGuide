import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Troubleshooting': [
      { name: 'iPhone Guides', href: '/troubleshooting/iphone' },
      { name: 'Battery Issues', href: '/troubleshooting/battery' },
      { name: 'Connectivity Problems', href: '/troubleshooting/connectivity' },
      { name: 'Camera Issues', href: '/troubleshooting/camera' },
      { name: 'App Problems', href: '/troubleshooting/app-issues' },
      { name: 'iOS Updates', href: '/troubleshooting/ios-updates' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Newsletter', href: '/newsletter' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300 no-print">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">iFixGuide</h3>
            <p className="text-sm mb-4">
              Your trusted source for iPhone and iOS troubleshooting guides. 
              Fix your device issues with our expert step-by-step solutions.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} iFixGuide. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Not affiliated with Apple Inc. iPhone and iOS are trademarks of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

