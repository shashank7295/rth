import '../globals.css';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { CartProvider } from '@/components/shared/cart-provider';

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-6">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
