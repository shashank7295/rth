"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/shared/cart-provider';

export default function CartPage() {
  const { items, increment, decrement, removeItem, clear, total } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-yellow-300">Your Cart</h1>

      {!hasItems && (
        <div className="text-center py-16 border border-dashed border-yellow-600/30 rounded-lg">
          <p className="text-yellow-200/80">Your cart is empty.</p>
          <Link href="/products" className="mt-4 inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-5 py-2 rounded-md font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all">Start Shopping</Link>
        </div>
      )}

      {hasItems && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.slug} className="flex items-center gap-4 p-4 border border-yellow-600/30 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="w-20 h-20 relative rounded border border-yellow-600/20 overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-yellow-600/50">🧴</div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-yellow-300">{item.title}</div>
                  <div className="text-yellow-400">₹{item.price}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decrement(item.slug)} className="px-2 py-1 border border-yellow-600/40 rounded text-yellow-300 hover:bg-yellow-600/10">-</button>
                  <div className="px-3 py-1 rounded bg-black/50 border border-yellow-600/30 text-yellow-200">{item.qty}</div>
                  <button onClick={() => increment(item.slug)} className="px-2 py-1 border border-yellow-600/40 rounded text-yellow-300 hover:bg-yellow-600/10">+</button>
                </div>
                <button onClick={() => removeItem(item.slug)} className="text-red-400 hover:text-red-300">Remove</button>
              </div>
            ))}
          </div>

          <aside className="p-4 border border-yellow-600/30 rounded-lg bg-gradient-to-br from-black via-gray-900 to-black h-fit">
            <h2 className="text-xl font-semibold text-yellow-300 mb-4">Order Summary</h2>
            <div className="flex justify-between text-yellow-200 mb-2">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="text-yellow-400 text-sm mb-4">Taxes and shipping calculated at checkout.</div>
            <button className="w-full mb-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-5 py-2 rounded-md font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all">Checkout</button>
            <button onClick={clear} className="w-full border border-yellow-600/40 text-yellow-300 px-5 py-2 rounded-md font-semibold hover:bg-yellow-600/10 transition-all">Clear Cart</button>
          </aside>
        </div>
      )}
    </div>
  );
}
