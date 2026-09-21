import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.testappara.com';
  const routes = [
    '', 'test-tool-page', 'about', 'faq', 'privacy', 'terms', 'certificate-generator', 'download',
    'device-test-series', 'property-share-calculator', 'land-unit-convertor',
    'keyboard-test', 'keyboard-test/Keyboard%20testing/keyboard-test',
    'keyboard-test/Keyboard%20testing/full-size-keyboard-test',
    'keyboard-test/Keyboard%20testing/ansi-keyboard-test',
    'keyboard-test/Keyboard%20testing/iso-keyboard-test',
    'keyboard-test/Keyboard%20testing/laptop-keyboard-test',
    'keyboard-test/Keyboard%20testing/mac-keyboard-test',
    'keyboard-test/Keyboard%20testing/tkl-keyboard-test',
    'keyboard-test/Keyboard%20testing/60-percent-keyboard-test',
    'keyboard-test/Keyboard%20testing/65-percent-keyboard-test',
    'spacebar-test', 'typing-speed-test', 'mouse-test', 'cps-test', 'mouse-accuracy-test',
    'mouse-dpi-estimator', 'mouse-polling-rate-test', 'scroll-test', 'double-click-test',
    'jitter-click-test', 'butterfly-click-test', 'drag-click-test', 'internet-speed-test',
    'latency-test', 'browser-test', 'dead-pixel-test', 'monitor-test', 'reaction-time-test',
    'gamepad-test', 'microphone-test', 'speaker-test', 'webcam-test', 'touchscreen-test',
  ];

  return routes.map((route, index) => ({
    url: route ? `${baseUrl}/${route}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: route === '' || route === 'test-tool-page' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : route === 'test-tool-page' ? 0.9 : 0.7,
  }));
}
