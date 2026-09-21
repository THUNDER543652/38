import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latency Test — Check Ping & Network Delay',
  description: 'Measure network ping and latency in your browser with a free online latency test.',
  alternates: { canonical: '/latency-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
