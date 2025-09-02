import { ProductCard } from '@/components/storefront/product-card';
import { mockProducts } from '@/lib/mock-data';

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-2">All Products</h1>
        <p className="text-yellow-200/80">Explore our complete fragrance collection</p>
      </section>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {mockProducts.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
