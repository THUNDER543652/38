import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.testappara.com'),
  title: {
    default: 'TestAppara — Free PC Device Testing Tools',
    template: '%s | TestAppara',
  },
  description: 'Free browser-based device testing tools for keyboards, mice, displays, network connections, microphones, cameras, speakers, and more. No downloads or account required.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '256x256' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { const t = localStorage.getItem("tw-theme"); document.documentElement.dataset.theme = t === "light" ? "light" : "dark"; } catch (e) { document.documentElement.dataset.theme = "dark"; }` }} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3995420051808249"
          crossOrigin="anonymous"
        />
      </head>
      <body className={dmSans.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'TestAppara',
          url: 'https://www.testappara.com',
          description: 'Free browser-based device testing tools.',
        }) }} />
        {children}
      </body>
    </html>
  );
}
