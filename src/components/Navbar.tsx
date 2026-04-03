'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/protocol', label: 'Protocol' },
  { href: '/developers', label: 'Developers' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/token', label: '$NOTA' },
  { href: '/whitepaper', label: 'Whitepaper' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  const isDark = resolvedTheme === 'dark';

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-sm" style={{ borderColor: 'var(--border)', backgroundColor: 'color-mix(in srgb, var(--bg) 92%, transparent)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-2 text-sm font-medium" style={{ color: isDark ? '#ffffff' : 'var(--brand)', letterSpacing: '-0.01em' }}>
            <Image src="/logo.png" alt="Notareum" width={48} height={48} className="h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12" />
            <span className="truncate">Notareum</span>
          </Link>

          {/* Desktop: Segmented pill nav (V7 style) */}
          <div className="hidden md:block">
            <div className="segmented-nav">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button data-active={pathname === link.href ? 'true' : 'false'}>
                    {link.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{ color: 'var(--text-muted)' }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            )}
            <button
              type="button"
              className="btn-secondary btn-secondary-fill-hover text-sm justify-center whitespace-nowrap"
            >
              Launch dApp
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="rounded-full p-2 transition-colors md:hidden"
            style={{ color: 'var(--text-muted)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" style={{ transform: open ? 'rotate(45deg) translateY(6px)' : '' }} />
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" style={{ opacity: open ? '0' : '1' }} />
            <div className="w-5 h-0.5 bg-current transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-6px)' : '' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t py-4 md:hidden" style={{ borderColor: 'var(--border)' }}>
            <div className="card rounded-2xl p-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-sm transition-colors"
                  style={{
                    background: pathname === link.href ? 'color-mix(in srgb, var(--brand) 10%, transparent)' : 'transparent',
                    color: pathname === link.href ? 'var(--brand)' : 'var(--text-muted)',
                  }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3 px-1 pb-1">
                {mounted && (
                  <button
                    type="button"
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                    className="rounded-full px-4 py-2.5 text-xs"
                    style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    {isDark ? '☀ Light' : '☾ Dark'}
                  </button>
                )}
                <button type="button" className="btn-primary w-full text-sm justify-center">
                  Launch dApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
