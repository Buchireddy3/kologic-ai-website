'use client'

import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Kologic AI</h3>
            <p className="mb-4 text-gray-400">
              Pioneering the future of artificial intelligence with innovative solutions that transform businesses and enhance customer experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="hover:text-primary-400 transition-colors">
                  AI Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  Kore led CX
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary-400 transition-colors">
                  Industry-Specific Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <a href="mailto:hello@kologic.ai" className="hover:text-primary-400 transition-colors">
                  hello@kologic.ai
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span>Sri Vivekananda Nagar, Madhapur, Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Kologic AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
