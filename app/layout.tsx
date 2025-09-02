import './globals.css';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'Itraya Perfumers - Authentic Indian Attars & Perfumes',
  description: 'Discover authentic Indian attars and perfumes from Kannauj. Premium fragrances blending heritage with modern elegance.',
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
