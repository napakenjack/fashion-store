import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, ChevronLeft } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Checkout() {
  const { items, subtotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Your cart is empty</h2>
        <Button className="mt-8" onClick={() => navigate('/shop')}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <CheckCircle2 size={64} className="text-green-500 mb-6" />
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Order Confirmed</h1>
        <p className="mt-4 text-neutral-600 max-w-md">
          Thank you for your purchase! Your order #AURA-{Math.floor(Math.random() * 100000)} has been received and is being processed. We've sent a confirmation email to you.
        </p>
        <Button className="mt-8" onClick={() => navigate('/')}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/cart')} className="flex items-center text-sm text-neutral-500 hover:text-black mb-8">
          <ChevronLeft size={16} className="mr-1" /> Return to cart
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Contact Info */}
              <div className="bg-white p-6 shadow-sm border border-neutral-200">
                <h2 className="text-lg font-medium text-neutral-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Input type="email" placeholder="Email address" required />
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded-none border-neutral-300 text-black focus:ring-black" />
                    <span className="text-sm text-neutral-600">Email me with news and offers</span>
                  </label>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 shadow-sm border border-neutral-200">
                <h2 className="text-lg font-medium text-neutral-900 mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <select className="flex h-11 w-full rounded-none border border-neutral-300 bg-transparent px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                  <Input placeholder="First name" required />
                  <Input placeholder="Last name" required />
                  <div className="sm:col-span-2">
                    <Input placeholder="Address" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Input placeholder="Apartment, suite, etc. (optional)" />
                  </div>
                  <Input placeholder="City" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="State" required />
                    <Input placeholder="ZIP code" required />
                  </div>
                  <div className="sm:col-span-2">
                    <Input type="tel" placeholder="Phone" required />
                  </div>
                </div>
              </div>

              {/* Payment (Mock) */}
              <div className="bg-white p-6 shadow-sm border border-neutral-200">
                <h2 className="text-lg font-medium text-neutral-900 mb-6">Payment</h2>
                <p className="text-sm text-neutral-500 mb-4">All transactions are secure and encrypted.</p>
                <div className="space-y-4 border border-neutral-200 p-4 bg-neutral-50">
                  <div className="sm:col-span-2">
                    <Input placeholder="Card number" required pattern="\d{16}" title="16 digit card number" />
                  </div>
                  <div className="sm:col-span-2">
                    <Input placeholder="Name on card" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Expiration date (MM/YY)" required />
                    <Input placeholder="Security code" required />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full h-14 text-lg" isLoading={isSubmitting}>
                Pay ${total.toFixed(2)}
              </Button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="mt-10 lg:col-span-5 lg:mt-0">
            <div className="sticky top-24 bg-white p-6 shadow-sm border border-neutral-200">
              <h2 className="text-lg font-medium text-neutral-900 mb-6">Order Summary</h2>
              
              <ul className="divide-y divide-neutral-200 max-h-96 overflow-y-auto pr-2">
                {items.map((item) => (
                  <li key={item.id} className="flex py-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-none object-cover object-center bg-neutral-100"
                      />
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-500 text-[10px] font-medium text-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="ml-4 flex flex-1 flex-col justify-center">
                      <h3 className="text-sm font-medium text-neutral-900">{item.name}</h3>
                      <p className="mt-1 text-xs text-neutral-500">{item.color} / {item.size}</p>
                    </div>
                    <p className="text-sm font-medium text-neutral-900 ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-neutral-200 pt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Input placeholder="Discount code" className="flex-1" />
                  <Button variant="outline">Apply</Button>
                </div>

                <dl className="space-y-4 text-sm text-neutral-600 border-t border-neutral-200 pt-6">
                  <div className="flex items-center justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-neutral-900">${subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-neutral-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-neutral-200 pt-4 text-lg font-medium text-neutral-900">
                    <dt>Total</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
