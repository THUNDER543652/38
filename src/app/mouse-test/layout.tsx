import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mouse Test — Check Buttons & Scroll Wheel',
  description: 'Test mouse buttons, side buttons, and scroll wheel behavior with a free online mouse test.',
  alternates: { canonical: '/mouse-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
