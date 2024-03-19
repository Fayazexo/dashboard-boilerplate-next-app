'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const secondaryNavigation = [
  { name: 'Overview', href: '/deployments', current: true },
  { name: 'Activity', href: '/deployments/activity', current: false },
  { name: 'Settings', href: '/deployments/settings', current: false },
];

export default function DeploymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main>
      <header>
        {/* Secondary navigation */}
        <nav className="flex overflow-x-auto border-b border-white/10 py-4">
          <ul
            role="list"
            className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
          >
            {secondaryNavigation.map(item => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={
                    item.href === '/' && pathname === '/'
                      ? 'bg-gray-800 text-white'
                      : pathname === item.href
                      ? 'text-brand'
                      : ''
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {children}
    </main>
  );
}
