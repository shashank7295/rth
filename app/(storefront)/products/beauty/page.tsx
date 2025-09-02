import { ProductCard } from '@/components/storefront/product-card';

const beautyProducts = [
  { slug: 'face-pack', title: 'Face Pack', price: 299, description: 'Herbal face pack for glowing skin' },
  { slug: 'gulab-jal', title: 'Gulab Jal', price: 149, description: 'Pure rose water toner' },
  { slug: 'chandan-powder', title: 'Chandan Powder', price: 249, description: 'Sandalwood powder for skincare and rituals' },
  { slug: 'chandan-mutha', title: 'Chandan Mutha', price: 199, description: 'Sandalwood chips for traditional use' },
];

export default function BeautyPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-2">Beauty</h1>
        <p className="text-yellow-200/80">Natural beauty essentials</p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beautyProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
