import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaker Test — Test Left & Right Audio',
  description: 'Test speaker output and left/right audio channels directly in your browser.',
  alternates: { canonical: '/speaker-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
