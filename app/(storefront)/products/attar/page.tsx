import { ProductCard } from '@/components/storefront/product-card';

// Attar products data
const attarProducts = [
  {
    slug: 'chameli-attar',
    title: 'Chameli Attar',
    price: 1299,
    description: 'Pure jasmine attar with enchanting floral fragrance'
  },
  {
    slug: 'mogra-attar',
    title: 'Mogra Attar',
    price: 1199,
    description: 'Traditional mogra attar with intense floral notes'
  },
  {
    slug: 'bela-attar',
    title: 'Bela Attar',
    price: 1399,
    description: 'Authentic bela attar with sweet floral essence'
  },
  {
    slug: 'kadamba-attar',
    title: 'Kadamba Attar',
    price: 1599,
    description: 'Rare kadamba attar with unique earthy floral scent'
  },
  {
    slug: 'juhi-attar',
    title: 'Juhi Attar',
    price: 1249,
    description: 'Delicate juhi attar with soft romantic fragrance'
  },
  {
    slug: 'rajnigandha-attar',
    title: 'Rajnigandha Attar',
    price: 1799,
    description: 'Premium rajnigandha attar with night-blooming essence'
  },
  {
    slug: 'hina-attar',
    title: 'Hina Attar',
    price: 999,
    description: 'Traditional hina attar with cooling herbal properties'
  },
  {
    slug: 'shamama-attar',
    title: 'Shamama Attar',
    price: 2199,
    description: 'Complex shamama blend with multiple aromatic herbs'
  },
  {
    slug: 'mitti-attar',
    title: 'Mitti Attar',
    price: 899,
    description: 'Earthy mitti attar capturing the essence of wet soil'
  },
  {
    slug: 'oud-agarwood-attar',
    title: 'Oud/Agarwood Attar',
    price: 3499,
    description: 'Luxurious oud attar with deep woody and smoky notes'
  },
  {
    slug: 'chandan-attar',
    title: 'Chandan Attar',
    price: 1899,
    description: 'Pure sandalwood attar with calming woody fragrance'
  },
  {
    slug: 'amber-attar',
    title: 'Amber Attar',
    price: 1699,
    description: 'Warm amber attar with rich resinous aroma'
  },
  {
    slug: 'musk-attar',
    title: 'Musk Attar',
    price: 2299,
    description: 'Sensual musk attar with long-lasting appeal'
  },
  {
    slug: 'gulanb-attar',
    title: 'Gulanb Attar',
    price: 1499,
    description: 'Classic rose attar with pure Bulgarian rose essence'
  },
  {
    slug: 'kewra-attar',
    title: 'Kewra Attar',
    price: 1099,
    description: 'Refreshing kewra attar with tropical floral notes'
  },
  {
    slug: 'kesar-attar',
    title: 'Kesar Attar',
    price: 2799,
    description: 'Premium saffron attar with rich golden fragrance'
  },
  {
    slug: 'illaichi-attar',
    title: 'Illaichi Attar',
    price: 1399,
    description: 'Spicy cardamom attar with warm aromatic essence'
  },
  {
    slug: 'shamamatul-attar',
    title: 'Shamamatul Attar',
    price: 2499,
    description: 'Royal shamamatul blend with complex herbal composition'
  }
];

export default function AttarPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-2">Attar Collection</h1>
        <p className="text-yellow-200/80">Authentic traditional attars from Kannauj - Pure, natural, and long-lasting</p>
      </section>
      
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attarProducts.map((attar) => (
            <ProductCard key={attar.slug} product={attar} />
          ))}
        </div>
      </section>
    </div>
  );
}
