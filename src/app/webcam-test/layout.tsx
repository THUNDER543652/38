import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webcam Test — Check Camera, Resolution & FPS',
  description: 'Test your webcam camera feed, resolution, and FPS directly in your browser.',
  alternates: { canonical: '/webcam-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
