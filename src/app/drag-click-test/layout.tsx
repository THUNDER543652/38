import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drag Click Test — Test Mouse Drag Clicking',
  description: 'Test drag clicking performance and consistency with a free browser-based mouse drag click test.',
  alternates: { canonical: '/drag-click-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
