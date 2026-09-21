import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monitor Test — Check Display Quality',
  description: 'Run browser-based monitor checks for display quality, colors, and visual uniformity.',
  alternates: { canonical: '/monitor-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
