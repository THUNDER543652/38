import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gamepad Test — Test Controller Buttons & Axes',
  description: 'Test gamepad and controller buttons, sticks, triggers, and axes online with a free browser-based tool.',
  alternates: { canonical: '/gamepad-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
