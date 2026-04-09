import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '#process', label: 'Process' },
    { href: '#services', label: 'Services' },
    { href: '#brandos', label: 'BrandOS' },
    { href: '#insights', label: 'Insights' },
    { href: '#about', label: 'About' },
  ];

  const resourceLinks = [
    { href: '#assessment', label: 'Governance Assessment' },
    { href: '#insights', label: 'Insights' },
    { href: '#process', label: 'Process' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a96e]/20">
      {/* Gold divider line effect */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Branding */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block w-fit">
              <span className="text-sm font-sans font-semibold tracking-widest text-white hover:text-[#c9a96e] transition-colors">
                THE BRAND SPINE
              </span>
            </Link>
            <p className="text-sm font-sans text-white/60">
              Identity Governance for Scaling Leaders
            </p>
            <p className="text-xs font-sans text-white/40 mt-6">
               {currentYear} The Brand Spine. All rights reserved.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-sans font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans text-white/60 hover:text-[#c9a96e] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-sans font-semibold text-white">Resources</h3>
            <nav className="flex flex-col space-y-3">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans text-white/60 hover:text-[#c9a96e] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-sans font-semibold text-white">Get in Touch</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 space-y-3">
              <div className="text-sm font-sans text-white/80">
                <a
                  href="mailto:jo@thebrandspine.com"
                  className="hover:text-[#c9a96e] transition-colors break-all"
                >
                  jo@thebrandspine.com
                </a>
              </div>
              <div className="text-sm font-sans text-white/80">
                <a
                  href="mailto:brett@thebrandspine.com"
                  className="hover:text-[#c9a96e] transition-colors break-all"
                >
                  brett@thebrandspine.com
                </a>
              </div>
              <div className="pt-2 border-t border-white/10 flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#c9a96e] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with updated date */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs font-sans text-white/40">
            Last updated April 2026
          </p>
          <p className="text-xs font-sans text-white/40 mt-4 md:mt-0">
            Built with premium design. No junk.
          </p>
        </div>
      </div>
    </footer>
  );
}
