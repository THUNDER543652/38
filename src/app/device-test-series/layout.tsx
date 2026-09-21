import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full Device Test – Laptop, PC, Phone & Tablet Test',
  description: 'Run a complete device test for your laptop, PC, phone or tablet. Check keyboard, mouse, touchscreen, display, network, speakers, microphone and camera, then download one combined PDF report.',
  alternates: { canonical: '/device-test-series' },
};

export default function FullDeviceTestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
