import { ProductCard } from '@/components/storefront/product-card';

const essentialOilProducts = [
  { slug: 'cardamom-oil-elaichi', title: 'Cardamom Oil (Elaichi)', price: 1599, description: 'Spicy-sweet cardamom essential oil' },
  { slug: 'clove-oil-laung', title: 'Clove Oil (Laung)', price: 899, description: 'Warm, spicy clove essential oil' },
  { slug: 'black-pepper-oil', title: 'Black Pepper Oil', price: 1199, description: 'Sharp, peppery essential oil with warming effect' },
  { slug: 'nutmeg-oil-jaiphal', title: 'Nutmeg Oil (Jaiphal)', price: 1099, description: 'Sweet, woody nutmeg essential oil' },
  { slug: 'hina-oil', title: 'Hina Oil', price: 1399, description: 'Traditional hina essential oil blend' },
  { slug: 'kewra-oil', title: 'Kewra Oil', price: 999, description: 'Floral kewra essential oil with tropical notes' },
  { slug: 'ruh-khus', title: 'Ruh Khus', price: 1899, description: 'Pure vetiver (khus) essential oil' },
  { slug: 'rose-oil', title: 'Rose Oil', price: 2499, description: 'Luxurious rose essential oil' },
  { slug: 'jasmine-oil', title: 'Jasmine Oil', price: 1599, description: 'Intense floral jasmine essential oil' },
  { slug: 'tuberose-oil', title: 'Tuberose Oil', price: 1699, description: 'Rich white floral tuberose essential oil' },
  { slug: 'lavender-oil', title: 'Lavender Oil', price: 899, description: 'Soothing lavender essential oil' },
  { slug: 'marigold-oil', title: 'Marigold Oil', price: 1099, description: 'Herbaceous marigold (tagetes) essential oil' },
  { slug: 'sandalwood-oil', title: 'Sandalwood Oil', price: 2899, description: 'Premium sandalwood essential oil' },
  { slug: 'agarwood-oil', title: 'Agarwood Oil', price: 3499, description: 'Rare agarwood (oud) essential oil' },
  { slug: 'cedarwood-oil', title: 'Cedarwood Oil', price: 999, description: 'Woody, grounding cedarwood essential oil' },
  { slug: 'frankincense-oil', title: 'Frankincense Oil', price: 1499, description: 'Resinous frankincense essential oil' },
  { slug: 'myrrh-oil', title: 'Myrrh Oil', price: 1599, description: 'Rich resinous myrrh essential oil' },
];

export default function EssentialOilPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-2">Essential Oils</h1>
        <p className="text-yellow-200/80">Pure essential oils sourced and crafted with care</p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentialOilProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
