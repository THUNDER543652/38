import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Double Click Test — Check Mouse Double-Clicks',
  description: 'Test your mouse double-click performance and consistency with a free online double-click test.',
  alternates: { canonical: '/double-click-test' },
};

export default function RouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
