'use client';

import Link from 'next/link';

const footerLinks = {
  Protocol: [
    { label: 'How It Works', href: '/protocol#how-it-works' },
    { label: '.nota Format', href: '/protocol#file-format' },
    { label: 'Verification', href: '/protocol#verification' },
    { label: 'Security', href: '/protocol#security' },
  ],
  Developers: [
    { label: 'Documentation', href: '/developers' },
    { label: 'SDK', href: '/developers#sdk' },
    { label: 'API Reference', href: '/developers#api' },
    { label: 'GitHub', href: 'https://github.com/notareum', target: '_blank' },
  ],
  Community: [
    { label: 'Discord', href: 'https://discord.gg/notareum', target: '_blank' },
    { label: 'Twitter / X', href: 'https://twitter.com/notareum', target: '_blank' },
    { label: 'Telegram', href: 'https://t.me/notareum', target: '_blank' },
    { label: 'Blog', href: '/blog' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Brand Kit', href: '/about#brand' },
    { label: 'Contact', href: '/about#contact' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-alt)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top: logo + newsletter + links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand + newsletter */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded-sm flex-shrink-0" style={{ border: '2px solid var(--accent)' }} />
              <span className="font-semibold text-[0.95rem] tracking-tight" style={{ color: 'var(--text)' }}>Notareum</span>
            </Link>
            <p className="text-sm mb-6 leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
              The trust layer for Web3. Open protocol for verified blockchain resource sharing.
            </p>
            <p className="label mb-3">Stay updated</p>
            <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-pill px-3 py-2.5 text-sm font-mono transition-colors"
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
              <button type="submit" className="btn-primary text-sm px-4 py-2.5 font-mono">
                Subscribe
              </button>
            </form>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 className="label mb-4">{col}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={(link as { target?: string }).target}
                      rel={(link as { target?: string }).target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="text-sm transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
            &copy; 2026 Notareum Labs
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>
              Privacy
            </Link>
            <Link href="/terms" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
