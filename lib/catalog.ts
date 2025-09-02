export type CatalogItem = {
  slug: string; // product slug (may not have a dedicated page yet)
  title: string;
  price: number;
  description?: string;
  image?: string;
  category: 'Perfume' | 'Attar' | 'Oud' | 'Beauty' | 'Compound' | 'Essential Oil';
  href: string; // where to send the user (category page for now)
};

export const CATALOG: CatalogItem[] = [
  // Premium Perfume Collection
  { slug: 'premium-sandalwood-attar', title: 'Premium Sandalwood Attar', price: 1199, description: '12ml of pure sandalwood essence', category: 'Perfume', href: '/products/perfume' },
  { slug: 'premium-shamama-attar', title: 'Premium Shamama Attar', price: 1199, description: '12ml of exotic shamama blend', category: 'Perfume', href: '/products/perfume' },
  { slug: 'ruh-gulab', title: 'Ruh Gulab', price: 21999, description: '12ml of pure rose absolute', category: 'Perfume', href: '/products/perfume' },
  { slug: 'ruh-khus', title: 'Ruh Khus', price: 1099, description: '12ml of pure vetiver essential oil', category: 'Perfume', href: '/products/perfume' },
  { slug: 'ruh-kewda', title: 'Ruh Kewda', price: 22499, description: '12ml of rare kewda extract', category: 'Perfume', href: '/products/perfume' },
  { slug: 'mitti-attar', title: 'Mitti Attar', price: 599, description: '12ml of petrichor fragrance', category: 'Perfume', href: '/products/perfume' },

  // Attar (updated with new prices and products)
  { slug: 'chameli-attar', title: 'Chameli Attar', price: 499, description: 'Floral jasmine essence', category: 'Attar', href: '/products/attar' },
  { slug: 'mogra-attar', title: 'Mogra Attar', price: 599, description: 'Indian jasmine variant', category: 'Attar', href: '/products/attar' },
  { slug: 'bele-attar', title: 'Bele Attar', price: 599, description: 'Exotic floral blend', category: 'Attar', href: '/products/attar' },
  { slug: 'kadambar-attar', title: 'Kadambar Attar', price: 499, description: 'Classic floral bouquet', category: 'Attar', href: '/products/attar' },
  { slug: 'juhi-attar', title: 'Juhi Attar', price: 499, description: 'Delicate jasmine fragrance', category: 'Attar', href: '/products/attar' },
  { slug: 'rajnigandha-attar', title: 'Rajnigandha Attar', price: 499, description: 'Tuberose floral delight', category: 'Attar', href: '/products/attar' },
  { slug: 'heena-attar', title: 'Heena Attar', price: 999, description: 'Traditional hina distillation', category: 'Attar', href: '/products/attar' },
  { slug: 'shamama-attar', title: 'Shamama Attar', price: 1199, description: 'Complex heritage attar', category: 'Attar', href: '/products/attar' },
  { slug: 'mitti-attar', title: 'Mitti Attar', price: 599, description: 'Petrichor earthen aroma', category: 'Attar', href: '/products/attar' },
  { slug: 'oud-agarwood-attar', title: 'Oud/Agarwood Attar', price: 0, description: 'Rich resinous agarwood', category: 'Attar', href: '/products/attar' },
  { slug: 'chandan-attar', title: 'Chandan Attar', price: 1199, description: 'Grounding sandalwood base', category: 'Attar', href: '/products/attar' },
  { slug: 'amber-attar', title: 'Amber Attar', price: 699, description: 'Warm amber glow', category: 'Attar', href: '/products/attar' },
  { slug: 'mask-attar', title: 'Mask Attar', price: 899, description: 'Specialty fragrance blend', category: 'Attar', href: '/products/attar' },
  { slug: 'gulanb-attar', title: 'Gulanb Attar', price: 0, description: 'Rose-based traditional attar', category: 'Attar', href: '/products/attar' },
  { slug: 'kewda-attar', title: 'Kewda Attar', price: 22499, description: 'Rare and exotic kewda', category: 'Attar', href: '/products/attar' },
  { slug: 'keshar-attar', title: 'Keshar Attar', price: 899, description: 'Saffron-infused fragrance', category: 'Attar', href: '/products/attar' },
  { slug: 'illaichi-attar', title: 'Illaichi Attar', price: 0, description: 'Cardamom spiced attar', category: 'Attar', href: '/products/attar' },
  { slug: 'shamamatul-attar', title: 'Shamamatul Attar', price: 1499, description: 'Premium traditional blend', category: 'Attar', href: '/products/attar' },

  // Oud
  { slug: 'black-oud', title: 'Black Oud', price: 2499, description: 'Intense smoky oud', category: 'Oud', href: '/products/oud' },
  { slug: 'white-oud', title: 'White Oud', price: 2299, description: 'Smoother, creamy oud', category: 'Oud', href: '/products/oud' },

  // Beauty (4)
  { slug: 'face-pack', title: 'Face Pack', price: 299, description: 'Herbal cleansing face pack', category: 'Beauty', href: '/products/beauty' },
  { slug: 'gulab-jal', title: 'Gulab Jal', price: 199, description: 'Pure rose water toner', category: 'Beauty', href: '/products/beauty' },
  { slug: 'chandan-powder', title: 'Chandan Powder', price: 349, description: 'Sandalwood skin care', category: 'Beauty', href: '/products/beauty' },
  { slug: 'chandan-mutha', title: 'Chandan Mutha', price: 399, description: 'Sandalwood roots for ritual/skin', category: 'Beauty', href: '/products/beauty' },

  // Compound (16)
  { slug: 'pan-masala-compound', title: 'Pan Masala Compound', price: 599, description: 'Flavor compound', category: 'Compound', href: '/products/compound' },
  { slug: 'tobacco-compound', title: 'Tobacco Compound', price: 599, description: 'Profile for tobacco blends', category: 'Compound', href: '/products/compound' },
  { slug: 'mouth-freshner-compound', title: 'Mouth Freshner Compound', price: 499, description: 'Refreshing aroma base', category: 'Compound', href: '/products/compound' },
  { slug: 'detergent-compound', title: 'Detergent Compound', price: 399, description: 'Laundry fragrance base', category: 'Compound', href: '/products/compound' },
  { slug: 'soap-compound', title: 'Soap Compound', price: 449, description: 'Toilet soap base', category: 'Compound', href: '/products/compound' },
  { slug: 'zarda-compound', title: 'Zarda Compound', price: 699, description: 'Traditional zarda profile', category: 'Compound', href: '/products/compound' },
  { slug: 'shampoo-compound', title: 'Shampoo Compound', price: 449, description: 'Hair wash fragrance', category: 'Compound', href: '/products/compound' },
  { slug: 'agarbatti-compound', title: 'Agarbatti Compound', price: 549, description: 'Incense sticks base', category: 'Compound', href: '/products/compound' },
  { slug: 'dhupbatti-compound', title: 'Dhupbatti Compound', price: 549, description: 'Dhoop base', category: 'Compound', href: '/products/compound' },
  { slug: 'hair-oil-compound', title: 'Hair Oil Compound', price: 449, description: 'Hair oil perfumery base', category: 'Compound', href: '/products/compound' },
  { slug: 'face-cream-compound', title: 'Face Cream Compound', price: 449, description: 'Cosmetic fragrance base', category: 'Compound', href: '/products/compound' },
  { slug: 'supari-compound', title: 'Supari Compound', price: 499, description: 'Betel nut flavor profile', category: 'Compound', href: '/products/compound' },
  { slug: 'phenyl-compound', title: 'Phenyl Compound', price: 399, description: 'Cleaner base', category: 'Compound', href: '/products/compound' },
  { slug: 'floor-cleaner-compound', title: 'Floor Cleaner Compound', price: 399, description: 'Floor cleaner fragrance', category: 'Compound', href: '/products/compound' },
  { slug: 'room-freshner-compound', title: 'Room Freshner Compound', price: 499, description: 'Air freshener base', category: 'Compound', href: '/products/compound' },
  { slug: 'candle-perfume-compound', title: 'Candle Perfume Compound', price: 549, description: 'Candle scent base', category: 'Compound', href: '/products/compound' },

  // Essential Oils (17)
  { slug: 'cardamom-oil-elaichi', title: 'Cardamom Oil (Elaichi)', price: 1599, description: 'Spicy-sweet cardamom essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'clove-oil-laung', title: 'Clove Oil (Laung)', price: 899, description: 'Warm, spicy clove essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'black-pepper-oil', title: 'Black Pepper Oil', price: 1199, description: 'Sharp, peppery essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'nutmeg-oil-jaiphal', title: 'Nutmeg Oil (Jaiphal)', price: 1099, description: 'Sweet, woody nutmeg essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'hina-oil', title: 'Hina Oil', price: 1399, description: 'Traditional hina essential oil blend', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'kewra-oil', title: 'Kewra Oil', price: 999, description: 'Floral kewra essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'ruh-khus', title: 'Ruh Khus', price: 1899, description: 'Pure vetiver (khus) essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'rose-oil', title: 'Rose Oil', price: 2499, description: 'Luxurious rose essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'jasmine-oil', title: 'Jasmine Oil', price: 1599, description: 'Intense floral jasmine essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'tuberose-oil', title: 'Tuberose Oil', price: 1699, description: 'Rich white floral tuberose essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'lavender-oil', title: 'Lavender Oil', price: 899, description: 'Soothing lavender essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'marigold-oil', title: 'Marigold Oil', price: 1099, description: 'Herbaceous marigold (tagetes) essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'sandalwood-oil', title: 'Sandalwood Oil', price: 2899, description: 'Premium sandalwood essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'agarwood-oil', title: 'Agarwood Oil', price: 3499, description: 'Rare agarwood (oud) essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'cedarwood-oil', title: 'Cedarwood Oil', price: 999, description: 'Woody, grounding cedarwood essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'frankincense-oil', title: 'Frankincense Oil', price: 1499, description: 'Resinous frankincense essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
  { slug: 'myrrh-oil', title: 'Myrrh Oil', price: 1599, description: 'Rich resinous myrrh essential oil', category: 'Essential Oil', href: '/products/essential-oil' },
];
