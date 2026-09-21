import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browser Test — Check Your Browser Capabilities',
  description: 'Test browser capabilities, supported APIs, device information, and modern web features directly in your browser with TestAppara.',
  alternates: { canonical: '/browser-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
