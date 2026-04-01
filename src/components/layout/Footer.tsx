import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold tracking-tighter">AURA</span>
            <p className="mt-4 text-sm text-neutral-400">
              Modern essentials for everyday living. Designed with intention, crafted with care.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/shop/new-arrivals" className="text-sm text-neutral-400 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop/women" className="text-sm text-neutral-400 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/shop/men" className="text-sm text-neutral-400 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/shop/accessories" className="text-sm text-neutral-400 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/shop/sale" className="text-sm text-neutral-400 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/faq" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/policies/shipping" className="text-sm text-neutral-400 hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/policies/returns" className="text-sm text-neutral-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-sm text-neutral-400">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 flex h-full items-center justify-center px-4 text-neutral-400 hover:text-white"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-400">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} AURA. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link to="/policies/privacy" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/policies/terms" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
