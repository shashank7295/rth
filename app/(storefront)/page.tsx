import Link from 'next/link';
import { ProductCard } from '@/components/storefront/product-card';
import { TypingText } from '@/components/shared/typing-text';
import path from 'path';
import { promises as fs } from 'fs';

// Build product cards from images found in public/products
async function getFeaturedPerfumes() {
  const productsDir = path.join(process.cwd(), 'public', 'products');
  let entries: string[] = [];
  try {
    entries = await fs.readdir(productsDir);
  } catch (e) {
    // Directory missing or unreadable; return empty list
    return [] as Array<{ slug: string; title: string; price: number; description?: string; image: string }>;
  }

  const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
  const files = entries.filter((f) => imageExts.has(path.extname(f).toLowerCase()));

  const toTitle = (base: string) =>
    base
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (m) => m.toUpperCase());
  const toSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  // Pricing by product name (case/spacing tolerant, ignores optional "12ml")
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/\b12ml\b/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const priceMap: Record<string, number> = {
    // Sandalwood Attar
    [normalize("Premium Sandalwood Attar")]: 1699,
    [normalize("Sandalwood Attar")]: 1699,
    // Shamama Attar
    [normalize("Premium Shamama Attar")]: 1399,
    [normalize("Shamama Attar")]: 1399,
    // Ruh variants
    [normalize("Ruh Gulab")]: 21999,
    [normalize("Ruh Khus")]: 1399,
    [normalize("Ruh Kewda")]: 18599,
    // Mitti Attar
    [normalize("Mitti Attar")]: 999,
  };

  return files.map((filename) => {
    const base = path.basename(filename, path.extname(filename));
    const title = toTitle(base);
    const slug = toSlug(title);
    const key = normalize(title);
    return {
      slug,
      title,
      price: priceMap[key] ?? 999,
      description: undefined,
      image: `/products/${filename}`,
    };
  });
}

export default async function HomePage() {
  const featuredPerfumes = await getFeaturedPerfumes();
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-xl border border-yellow-600/30 bg-gradient-to-br from-black via-gray-900 to-black px-6 py-14 text-center shadow-[0_0_40px_-10px_rgba(234,179,8,0.25)]">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{background:"radial-gradient(800px 200px at 50% -40%, rgba(234,179,8,0.25), transparent)"}} />
        <div className="relative mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-600/30 bg-black/40 px-4 py-1 text-[11px] md:text-xs text-yellow-300/90">
            <span className="inline-block h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
            Since Kannauj • The Perfume Capital of India
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <TypingText text="Itraya Perfumers Kannauj" className="shimmer-text" />
          </h1>
          <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-yellow-500/0 via-yellow-500/60 to-yellow-500/0" />
          <p className="mt-4 text-yellow-200/90 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
            Heritage Attars • Exquisite Perfumes • Pure Essential Oils
          </p>
          <div className="mt-6 flex justify-center gap-6 text-yellow-300/80 text-sm">
            <div className="border-l border-yellow-600/30 pl-4">
              <div className="font-semibold text-yellow-300">Authentic Attars</div>
              <div className="text-yellow-200/70">Traditional hydro-distilled</div>
            </div>
            <div className="border-l border-yellow-600/30 pl-4">
              <div className="font-semibold text-yellow-300">Premium Blends</div>
              <div className="text-yellow-200/70">Crafted in small batches</div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-300 mb-2">Featured Perfumes</h2>
          <p className="text-yellow-200/80">Handpicked premium fragrances from our collection</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPerfumes.map((perfume) => (
            <ProductCard key={perfume.slug} product={perfume} />
          ))}
        </div>
        
      </section>
    </div>
  );
}
