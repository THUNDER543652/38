import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reaction Time Test — Measure Your Reflexes',
  description: 'Measure reaction time in milliseconds with a free browser-based reaction time test.',
  alternates: { canonical: '/reaction-time-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
