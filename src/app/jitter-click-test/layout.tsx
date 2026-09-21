import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jitter Click Test — Measure Clicking Speed',
  description: 'Measure jitter clicking speed and consistency with a free browser-based mouse click test.',
  alternates: { canonical: '/jitter-click-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
