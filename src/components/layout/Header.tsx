import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';
import { categories } from '../../data/categories';
import { cn } from '../../lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
  const cartItemsCount = useCartStore((state) => state.totalItems);
  const wishlistCount = useWishlistStore((state) => state.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        Free shipping on all orders over $150. Free returns within 30 days.
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
          isScrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 lg:flex-1">
            <span className="text-2xl font-bold tracking-tighter">AURA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-8">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
            <button
              className="p-2 text-neutral-600 hover:text-black"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link to="/auth" className="hidden sm:block p-2 text-neutral-600 hover:text-black" aria-label="Account">
              <User size={20} />
            </Link>
            <Link to="/wishlist" className="relative p-2 text-neutral-600 hover:text-black" aria-label="Wishlist">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative p-2 text-neutral-600 hover:text-black" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="absolute left-0 top-full w-full border-t border-neutral-200 bg-white p-4 shadow-md">
            <div className="mx-auto max-w-3xl relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search products, categories..."
                className="w-full bg-neutral-100 py-3 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                autoFocus
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex w-4/5 max-w-sm flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <span className="text-xl font-bold tracking-tighter">AURA</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col px-4 py-6 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="text-lg font-medium text-neutral-900"
                >
                  {category.name}
                </Link>
              ))}
              <div className="my-4 h-px bg-neutral-200" />
              <Link to="/auth" className="text-base font-medium text-neutral-600">Account</Link>
              <Link to="/about" className="text-base font-medium text-neutral-600">About Us</Link>
              <Link to="/contact" className="text-base font-medium text-neutral-600">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
