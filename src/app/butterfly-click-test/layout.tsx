import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Butterfly Click Test — Measure Click Speed',
  description: 'Test butterfly clicking speed and consistency with a free browser-based click test from TestAppara.',
  alternates: { canonical: '/butterfly-click-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
