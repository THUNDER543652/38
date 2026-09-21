import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microphone Test — Check Your Mic Online',
  description: 'Check microphone input, audio levels, and microphone availability with a free browser-based microphone test.',
  alternates: { canonical: '/microphone-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
