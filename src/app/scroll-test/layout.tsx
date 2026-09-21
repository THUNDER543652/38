import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scroll Test — Check Mouse Wheel Scrolling',
  description: 'Test mouse scroll wheel input, direction, and scrolling behavior in your browser.',
  alternates: { canonical: '/scroll-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
