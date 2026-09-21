import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPS Test — Clicks Per Second Test',
  description: 'Measure clicks per second with a free online CPS test. Check your clicking speed and accuracy directly in your browser.',
  alternates: { canonical: '/cps-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
