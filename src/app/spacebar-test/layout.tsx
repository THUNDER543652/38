import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spacebar Test — Test Spacebar Speed',
  description: 'Test spacebar presses and speed with a free browser-based spacebar test.',
  alternates: { canonical: '/spacebar-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
