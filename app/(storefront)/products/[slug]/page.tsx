import { mockProducts } from '@/lib/mock-data';

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = mockProducts.find((p) => p.slug === slug);
  if (!product) return <div>Product not found</div>;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="aspect-square overflow-hidden rounded bg-gray-100" />
      <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="mt-4 text-lg font-medium">₹ {product.price}</div>
        <button className="mt-6 rounded bg-black px-4 py-2 text-white">Add to cart</button>
      </div>
    </div>
  );
}
