import { create } from 'zustand';

export type CartItem = { slug: string; title: string; price: number; qty: number };

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (item, qty = 1) => set((s) => {
    const existing = s.items.find((i) => i.slug === item.slug);
    if (existing) {
      return { items: s.items.map((i) => i.slug === item.slug ? { ...i, qty: i.qty + qty } : i) };
    }
    return { items: [...s.items, { ...item, qty }] };
  }),
  remove: (slug) => set((s) => ({ items: s.items.filter((i) => i.slug !== slug) })),
  clear: () => set({ items: [] }),
}));
