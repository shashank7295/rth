import { ProductCard } from '@/components/storefront/product-card';

// Perfume products data
const perfumeProducts = [
  {
    slug: 'male-mtg15',
    title: 'Male MTG15',
    price: 799,
    description: 'Premium masculine fragrance with bold and confident notes'
  },
  {
    slug: 'female-crystal-bright',
    title: 'Female Crystal Bright',
    price: 899,
    description: 'Elegant feminine perfume with sparkling floral essence'
  },
  {
    slug: 'unisex-mafia',
    title: 'Unisex Mafia',
    price: 999,
    description: 'Bold unisex fragrance with mysterious and captivating appeal'
  },
  {
    slug: 'car-perfume',
    title: 'Car Perfume',
    price: 299,
    description: 'Long-lasting car freshener with premium fragrance notes'
  },
  {
    slug: 'deodorant',
    title: 'Deodorant',
    price: 199,
    description: 'All-day protection with refreshing fragrance'
  },
  {
    slug: 'room-spray',
    title: 'Room Spray',
    price: 399,
    description: 'Instant room freshener with lasting aromatic experience'
  }
];

export default function PerfumePage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-2">Perfume Collection</h1>
        <p className="text-yellow-200/80">Modern fragrances for every occasion and space</p>
      </section>
      
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perfumeProducts.map((perfume) => (
            <ProductCard key={perfume.slug} product={perfume} />
          ))}
        </div>
      </section>
    </div>
  );
}
