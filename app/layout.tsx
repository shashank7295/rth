import './globals.css';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Itraya Perfumers - Authentic Indian Attars & Perfumes',
  description: 'Discover authentic Indian attars and perfumes from Kannauj. Premium fragrances blending heritage with modern elegance.',
  verification: {
    google: 'cQxbtT8VRjPVNqShQcwC7Dy5CeY767_30MDP_2QwYgE',
  },
  icons: {
    icon: '/itraya logo.jpg',
    apple: '/itraya logo.jpg',
  },
  openGraph: {
    title: 'Itraya Perfumers - Authentic Indian Attars & Perfumes',
    description: 'Discover authentic Indian attars and perfumes from Kannauj. Premium fragrances blending heritage with modern elegance.',
    images: [
      {
        url: '/itraya logo.jpg',
        width: 500,
        height: 500,
        alt: 'Itraya Perfumers Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itraya Perfumers - Authentic Indian Attars & Perfumes',
    description: 'Discover authentic Indian attars and perfumes from Kannauj.',
    images: ['/itraya logo.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
