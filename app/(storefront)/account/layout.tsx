export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <aside className="md:col-span-1 space-y-2">
        <a href="/account/orders" className="block">Orders</a>
        <a href="/account/addresses" className="block">Addresses</a>
        <a href="/account/wishlist" className="block">Wishlist</a>
      </aside>
      <section className="md:col-span-3">{children}</section>
    </div>
  );
}
