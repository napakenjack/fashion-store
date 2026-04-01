import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import { getNewArrivals, getBestSellers } from '../data/products';

export function Home() {
  const newArrivals = getNewArrivals().slice(0, 4);
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full bg-neutral-100">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop"
          alt="Fashion model wearing winter collection"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Elevate Your Everyday
            </h1>
            <p className="mb-8 text-lg font-medium sm:text-xl">
              Discover our new collection of premium essentials designed for modern living.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-black hover:bg-neutral-100">
                <Link to="/shop/new-arrivals">Shop New Arrivals</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/shop">Explore Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-4 text-center sm:text-left">
              <Truck className="h-6 w-6 text-neutral-400" />
              <div>
                <h3 className="text-sm font-semibold">Free Shipping</h3>
                <p className="text-xs text-neutral-500">On all orders over $150</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-center sm:text-left">
              <RefreshCw className="h-6 w-6 text-neutral-400" />
              <div>
                <h3 className="text-sm font-semibold">Easy Returns</h3>
                <p className="text-xs text-neutral-500">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-center sm:text-left">
              <ShieldCheck className="h-6 w-6 text-neutral-400" />
              <div>
                <h3 className="text-sm font-semibold">Secure Checkout</h3>
                <p className="text-xs text-neutral-500">100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Shortcuts */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/shop/women" className="group relative aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Women's Collection"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Women</h3>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-white group-hover:underline">
                    Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/shop/men" className="group relative aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop"
                alt="Men's Collection"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Men</h3>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-white group-hover:underline">
                    Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/shop/accessories" className="group relative aspect-[4/5] overflow-hidden bg-neutral-100 sm:col-span-2 lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop"
                alt="Accessories"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Accessories</h3>
                  <span className="mt-2 inline-flex items-center text-sm font-medium text-white group-hover:underline">
                    Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">New Arrivals</h2>
            <Link to="/shop/new-arrivals" className="hidden sm:flex items-center text-sm font-medium hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link to="/shop/new-arrivals">View All New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="aspect-square overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop"
                alt="Brand story"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Designed for the modern wardrobe.
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                At AURA, we believe in creating clothing that transcends seasons. Our pieces are crafted with premium, sustainable materials and designed with a minimalist aesthetic that fits seamlessly into your everyday life.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Best Sellers</h2>
            <Link to="/shop/best-sellers" className="hidden sm:flex items-center text-sm font-medium hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-neutral-900 text-white text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join the Club</h2>
          <p className="text-neutral-400 mb-8">
            Subscribe to receive 10% off your first order, plus updates on new arrivals and exclusive access to sales.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-black focus:outline-none"
              required
            />
            <Button type="submit" className="bg-white text-black hover:bg-neutral-200">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
