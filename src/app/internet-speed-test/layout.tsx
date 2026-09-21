import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internet Speed Test — Check Download & Upload Speed',
  description: 'Test your internet download speed, upload speed, and connection performance directly in your browser.',
  alternates: { canonical: '/internet-speed-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
