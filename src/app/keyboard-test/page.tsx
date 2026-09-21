import type { Metadata } from 'next';
import KeyboardTestClient from './Keyboard testing/keyboard-test/KeyboardTestClient';

export const metadata: Metadata = {
  title: 'Keyboard Test — Check Every Key Online',
  description: 'Test every keyboard key online, check key presses, and explore multiple keyboard layouts with TestAppara.',
  alternates: { canonical: '/keyboard-test' },
};

export default function KeyboardTestPage() {
  return <KeyboardTestClient initialLayout="full" initialPlatform="windows" initialRegion="ansi" initialTheme="dark" pageTitle="Keyboard Tester" pageDescription="Test every key on your keyboard in real time. Supports all layouts." />;
}
