import { ProductCard } from '@/components/storefront/product-card';

const compoundProducts = [
  { slug: 'pan-masala-compound', title: 'Pan Masala Compound', price: 499, description: 'Flavor compound for pan masala profiles' },
  { slug: 'tobacco-compound', title: 'Tobacco Compound', price: 599, description: 'Aroma compound for tobacco applications' },
  { slug: 'mouth-freshner-compound', title: 'Mouth Freshner Compound', price: 399, description: 'Refreshing mouth freshener compound' },
  { slug: 'detergent-compound', title: 'Detergent Compound', price: 349, description: 'Long-lasting detergent fragrance compound' },
  { slug: 'soap-compound', title: 'Soap Compound', price: 379, description: 'Gentle soap-grade fragrance compound' },
  { slug: 'zarda-compound', title: 'Zarda Compound', price: 549, description: 'Traditional zarda aroma compound' },
  { slug: 'shampoo-compound', title: 'Shampoo Compound', price: 399, description: 'Fresh hair-care fragrance compound' },
  { slug: 'agarbatti-compound', title: 'Agarbatti Compound', price: 329, description: 'Incense fragrance compound' },
  { slug: 'dhupbatti-compound', title: 'Dhupbatti Compound', price: 329, description: 'Resinous dhupbatti aroma compound' },
  { slug: 'hair-oil-compound', title: 'Hair Oil Compound', price: 429, description: 'Cosmetic-grade hair oil fragrance' },
  { slug: 'face-cream-compound', title: 'Face Cream Compound', price: 459, description: 'Skin-safe cream fragrance compound' },
  { slug: 'supari-compound', title: 'Supari Compound', price: 499, description: 'Bold supari profile compound' },
  { slug: 'phenyl-compound', title: 'Phenyl Compound', price: 299, description: 'Powerful floor cleaner fragrance base' },
  { slug: 'floor-cleaner-compound', title: 'Floor Cleaner Compound', price: 289, description: 'Citrus and pine floor cleaner base' },
  { slug: 'room-freshner-compound', title: 'Room Freshner Compound', price: 349, description: 'Air care fragrance compound' },
  { slug: 'candle-perfume-compound', title: 'Candle Perfume Compound', price: 449, description: 'Heat-stable candle fragrance compound' },
];

export default function CompoundPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-2">Compound Collection</h1>
        <p className="text-yellow-200/80">Specialized fragrance compounds for multiple applications</p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {compoundProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
