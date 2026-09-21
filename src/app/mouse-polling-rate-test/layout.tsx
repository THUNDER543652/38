import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mouse Polling Rate Test — Check Hz',
  description: 'Check your mouse polling rate in Hz using a free browser-based polling rate test.',
  alternates: { canonical: '/mouse-polling-rate-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
