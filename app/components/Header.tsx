'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Simple glassmorphic navbar background */}
      <div className="absolute inset-0 bg-[#0a0806]/40 backdrop-blur-2xl border-b border-amber-900/10">
        {/* Simple subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/3 via-transparent to-orange-600/3" />
      </div>
      
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent transition-opacity duration-200 group-hover:opacity-80" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em' }}>
              KG
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-amber-200/80 hover:text-amber-200 hover:bg-amber-900/10 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-lg text-sm font-semibold leading-6 transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-amber-50 bg-amber-900/20 backdrop-blur-sm shadow-lg shadow-amber-900/10'
                  : 'text-amber-200/70 hover:text-amber-100 hover:bg-amber-900/10'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href="mailto:kgirshman329@gmail.com"
            className="rounded-full bg-gradient-to-r from-amber-600/80 to-orange-600/80 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-amber-900/30 transition-all duration-200 hover:from-amber-500/90 hover:to-orange-500/90 hover:shadow-xl border border-amber-600/20"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden relative border-t border-amber-900/10 bg-[#0a0806]/60 backdrop-blur-2xl">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-base font-semibold leading-7 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-amber-900/20 backdrop-blur-sm text-amber-50 shadow-lg'
                    : 'text-amber-200/70 hover:bg-amber-900/10 hover:text-amber-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:kgirshman329@gmail.com"
              className="mt-4 block rounded-full bg-gradient-to-r from-amber-600/80 to-orange-600/80 backdrop-blur-sm px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-amber-900/30 transition-all duration-200 hover:from-amber-500/90 hover:to-orange-500/90 border border-amber-600/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
