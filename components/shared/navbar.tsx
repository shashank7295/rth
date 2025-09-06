"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [searchQuery, setSearchQuery] = useState('');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search page with query
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const productCategories = [
    { name: 'Perfume', href: '/products/perfume' as const },
    { name: 'Attar', href: '/products/attar' as const },
    { name: 'Oud', href: '/products/oud' as const },
    { name: 'Beauty', href: '/products/beauty' as const },
    { name: 'Compound', href: '/products/compound' as const },
    { name: 'Essential Oil', href: '/products/essential-oil' as const }
  ];

  return (
    <header className="sticky top-0 z-[60] border-b bg-black/95 backdrop-blur border-yellow-600/30">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold text-yellow-400">
          <img 
            src="/itraya logo.jpg" 
            alt="Itraya Perfumers Logo" 
            className="w-16 h-16 object-contain rounded-lg shadow-lg"
          />
          <span className={isHome ? 'shimmer-text' : ''}>Itraya</span>
        </Link>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-yellow-300 hover:text-yellow-400 transition-colors"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search perfumes..."
              className="w-full px-4 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-yellow-100 placeholder-yellow-300/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/cart" className="text-yellow-300 hover:text-yellow-400 transition-colors">Cart</Link>
          <Link href="/" className="text-yellow-300 hover:text-yellow-400 transition-colors">Home</Link>
          
          {/* Products Dropdown */}
          <div
            className="relative z-50"
            ref={dropdownRef}
          >
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="text-yellow-300 hover:text-yellow-400 transition-colors flex items-center gap-1"
            >
              Products
              <svg 
                className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isProductsDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 max-h-96 overflow-y-auto bg-black/95 backdrop-blur border border-yellow-600/30 rounded-lg shadow-lg z-50"
                onMouseDown={(e) => e.stopPropagation()}
                onClickCapture={(e) => e.stopPropagation()}
              >
                <div className="py-2">
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-yellow-300 hover:text-yellow-400 hover:bg-yellow-600/10 transition-colors"
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <Link href="/contact" className="text-yellow-300 hover:text-yellow-400 transition-colors">Contact</Link>
          
          <Link href="/about" className="text-yellow-300 hover:text-yellow-400 transition-colors">About</Link>
          <Link href="/admin" className="text-yellow-300 hover:text-yellow-400 transition-colors">Admin</Link>
        </nav>
      </div>

      {/* Mobile nav menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-yellow-600/20 bg-black/90">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-2 text-sm">
            <Link href="/cart" className="block text-yellow-300 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Cart</Link>
            <Link href="/" className="block text-yellow-300 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

            <div className="pt-2" ref={dropdownRef}>
              <button
                type="button"
                className="w-full flex items-center justify-between text-left text-yellow-300 hover:text-yellow-400 transition-colors"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <span>Products</span>
                <svg className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`mt-2 ml-3 border-l border-yellow-600/20 transition-all duration-200 overflow-hidden ${isProductsDropdownOpen ? 'max-h-96' : 'max-h-0'}`}
              >
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="block pl-3 py-2 text-yellow-300 hover:text-yellow-400 transition-colors"
                    onClick={() => {
                      setIsProductsDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="block text-yellow-300 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link href="/about" className="block text-yellow-300 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/admin" className="block text-yellow-300 hover:text-yellow-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Admin</Link>
          </div>
        </div>
      )}
    </header>
  );
}
