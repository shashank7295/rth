import Link from 'next/link';
import { CATALOG } from '@/lib/catalog';

type Props = { searchParams: { q?: string } };

export default function SearchPage({ searchParams }: Props) {
  const q = (searchParams.q ?? '').trim().toLowerCase();
  const results = q
    ? CATALOG.filter((p) =>
        [p.title, p.description, p.category]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
    : [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-yellow-300">Search</h1>
      <p className="text-yellow-200/80">{q ? `Results for "${q}"` : 'Type in the search bar to find products'}</p>

      {q && results.length === 0 && (
        <div className="border border-yellow-600/30 rounded-lg p-8 text-center text-yellow-200/80">
          No results found.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((item) => (
          <Link
            key={item.slug}
            href={item.href as any}
            className="group rounded-lg border border-yellow-600/30 p-4 bg-gradient-to-br from-black via-gray-900 to-black hover:shadow-lg hover:shadow-yellow-500/20 transition"
          >
            <div className="line-clamp-1 font-medium text-yellow-300 group-hover:text-yellow-200">{item.title}</div>
            <div className="text-yellow-400 text-sm">₹{item.price}</div>
            {item.description && (
              <div className="text-yellow-200/70 text-xs mt-1 line-clamp-2">{item.description}</div>
            )}
            <div className="mt-3 text-xs text-yellow-500/80">Category: {item.category}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
