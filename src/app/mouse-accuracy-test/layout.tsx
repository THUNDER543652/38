import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mouse Accuracy Test — Test Pointer Precision',
  description: 'Test mouse pointer accuracy and targeting precision with a free browser-based accuracy test.',
  alternates: { canonical: '/mouse-accuracy-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
