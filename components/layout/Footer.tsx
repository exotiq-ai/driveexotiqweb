import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-metallic-silver/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gulf-blue mb-2">
              Drive Exotiq
            </h3>
            <p className="text-metallic-silver text-sm">
              Luxury in Motion
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-pure-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-metallic-silver hover:text-gulf-blue transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-metallic-silver hover:text-gulf-blue transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-metallic-silver hover:text-gulf-blue transition-colors text-sm">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-metallic-silver hover:text-gulf-blue transition-colors text-sm">
                  Apply for Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-pure-white font-semibold mb-4">Social Media</h4>
            <a
              href="https://www.instagram.com/driveexotiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-metallic-silver hover:text-gulf-blue transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @driveexotiq
            </a>
          </div>

          {/* Investor Inquiries */}
          <div>
            <h4 className="text-pure-white font-semibold mb-4">Investors</h4>
            <p className="text-metallic-silver text-sm mb-3">
              Join our $2.5M Pre-Seed round
            </p>
            <Link href="/investors" className="text-gulf-blue hover:text-gulf-blue/80 transition-colors text-sm font-medium block mb-2">
              Investment Opportunity →
            </Link>
            <a href="mailto:hello@exotiq.ai" className="text-metallic-silver hover:text-gulf-blue transition-colors text-sm">
              hello@exotiq.ai
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-metallic-silver/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-metallic-silver text-sm">
            © 2025 Drive Exotiq. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-metallic-silver hover:text-gulf-blue transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-metallic-silver hover:text-gulf-blue transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
