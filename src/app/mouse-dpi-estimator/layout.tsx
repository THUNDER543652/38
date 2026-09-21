import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mouse DPI Estimator — Estimate DPI Online',
  description: 'Estimate your mouse DPI using a browser-based measurement tool without installing software.',
  alternates: { canonical: '/mouse-dpi-estimator' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
