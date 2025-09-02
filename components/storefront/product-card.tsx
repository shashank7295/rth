'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/shared/cart-provider';

export interface ProductCardData {
  slug: string;
  title: string;
  price: number;
  image?: string;
  description?: string;
}

export function ProductCard({ product }: { product: ProductCardData }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const router = useRouter();
  const { addItem } = useCart();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAddingToCart(true);
    addItem({ slug: product.slug, title: product.title, price: product.price, image: product.image }, 1);
    setTimeout(() => setIsAddingToCart(false), 400);
  };

  const handleBuyNow = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBuying(true);
    addItem({ slug: product.slug, title: product.title, price: product.price, image: product.image }, 1);
    setTimeout(() => {
      setIsBuying(false);
      router.push('/cart');
    }, 300);
  };

  return (
    <div className="group rounded-lg border border-yellow-600/30 p-4 hover:shadow-lg hover:shadow-yellow-500/20 bg-gradient-to-br from-black via-gray-900 to-black transition-all duration-200">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-square w-full rounded bg-gradient-to-br from-gray-800 to-black border border-yellow-600/20 overflow-hidden relative">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-yellow-600/50 text-4xl">🧴</div>
              <span className="absolute top-2 left-2 rounded-full bg-yellow-500 text-black text-xs font-bold px-2 py-1 shadow">
                coming soon
              </span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="mt-3 space-y-2">
        <Link href={`/products/${product.slug}`}>
          <div className="line-clamp-1 font-medium text-yellow-300 hover:text-yellow-200 transition-colors">
            {product.title}
          </div>
        </Link>
        
        <div className="space-y-3">
          <div className="text-yellow-400 font-semibold text-lg">₹{product.price}</div>
          
          <div className="flex gap-2">
            <button
              onClick={handleBuyNow}
              disabled={isBuying}
              className="flex-1 px-3 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm font-semibold rounded-md hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isBuying ? 'Processing...' : 'Buy Now'}
            </button>
            
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="flex-1 px-3 py-2 bg-transparent border border-yellow-500 text-yellow-400 text-sm font-semibold rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAddingToCart ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        </div>
        
        {product.description && (
          <p className="text-yellow-200/70 text-xs line-clamp-2 mt-1">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
}
