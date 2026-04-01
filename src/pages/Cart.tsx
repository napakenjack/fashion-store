import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';

export function Cart() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCartStore();
  const navigate = useNavigate();

  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
          <ShoppingBag size={40} className="text-neutral-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Your cart is empty</h2>
        <p className="mt-2 text-neutral-500">Looks like you haven't added anything yet.</p>
        <Button className="mt-8" onClick={() => navigate('/shop')}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Shopping Cart ({totalItems})</h1>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        {/* Cart Items */}
        <section className="lg:col-span-7">
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {items.map((item) => (
              <li key={item.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-none object-cover object-center sm:h-32 sm:w-32 bg-neutral-100"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <Link to={`/product/${item.productId}`} className="font-medium text-neutral-900 hover:underline">
                            {item.name}
                          </Link>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-neutral-500">{item.color}</p>
                        <p className="ml-4 border-l border-neutral-200 pl-4 text-neutral-500">{item.size}</p>
                      </div>
                      <p className="mt-1 text-sm font-medium text-neutral-900">${item.price}</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <div className="flex items-center border border-neutral-200 w-fit">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-3 py-1 text-neutral-500 hover:text-black"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-neutral-500 hover:text-black"
                        >
                          +
                        </button>
                      </div>

                      <div className="absolute right-0 top-0">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="-m-2 inline-flex p-2 text-neutral-400 hover:text-red-500"
                        >
                          <span className="sr-only">Remove</span>
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Order Summary */}
        <section className="mt-16 rounded-none bg-neutral-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-neutral-900">Order Summary</h2>

          <dl className="mt-6 space-y-4 text-sm text-neutral-600">
            <div className="flex items-center justify-between">
              <dt>Subtotal</dt>
              <dd className="text-neutral-900">${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
              <dt className="flex items-center">
                <span>Shipping estimate</span>
              </dt>
              <dd className="text-neutral-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-4 text-base font-medium text-neutral-900">
              <dt>Order total</dt>
              <dd>${total.toFixed(2)}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <Button className="w-full text-base h-14" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
          </div>
          
          <div className="mt-6 text-center text-sm text-neutral-500">
            <p>
              or{' '}
              <Link to="/shop" className="font-medium text-black hover:underline">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
