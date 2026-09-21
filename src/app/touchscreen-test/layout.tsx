import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Touchscreen Test — Check Touch Input',
  description: 'Test touchscreen responsiveness, touch points, and input behavior on compatible devices.',
  alternates: { canonical: '/touchscreen-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
