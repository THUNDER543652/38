import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dead Pixel Test — Find Stuck & Dead Pixels',
  description: 'Find dead, stuck, or defective pixels on your monitor with full-screen colors and a free browser-based pixel test.',
  alternates: { canonical: '/dead-pixel-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
