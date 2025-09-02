import { ProductCard } from '@/components/storefront/product-card';

// Oud products data
const oudProducts = [
  {
    slug: 'black-oud',
    title: 'Black Oud',
    price: 2999,
    description: 'Deep, smoky oud with rich woody undertones'
  },
  {
    slug: 'white-oud',
    title: 'White Oud',
    price: 2799,
    description: 'Smooth, refined oud with clean resinous notes'
  }
];

export default function OudPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-2">Oud Collection</h1>
        <p className="text-yellow-200/80">Premium agarwood fragrances with luxurious depth</p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {oudProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
