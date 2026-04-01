import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import { getProductById } from '../data/products';
import { Button } from '../components/ui/Button';

export function Wishlist() {
  const { items, toggleItem } = useWishlistStore();
  const addItem = useCartStore(state => state.addItem);

  const wishlistProducts = items.map(id => getProductById(id)).filter(Boolean);

  const handleMoveToCart = (product: any) => {
    // Default to first size and color for quick add
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colors[0].name,
      quantity: 1,
    });
    toggleItem(product.id); // Remove from wishlist
    alert('Moved to cart!');
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
          <Heart size={40} className="text-neutral-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Your wishlist is empty</h2>
        <p className="mt-2 text-neutral-500">Save items you love to your wishlist to shop them later.</p>
        <Button className="mt-8" asChild>
          <Link to="/shop">Explore Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-12">My Wishlist ({wishlistProducts.length})</h1>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {wishlistProducts.map((product) => product && (
          <div key={product.id} className="group relative flex flex-col">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
              <button
                onClick={() => toggleItem(product.id)}
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-neutral-500 hover:text-red-500 transition-colors"
                aria-label="Remove from wishlist"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="mt-4 flex flex-col flex-1">
              <h3 className="text-sm font-medium text-neutral-900">
                <Link to={`/product/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-neutral-500">${product.price}</p>
              <div className="mt-4 mt-auto z-10">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMoveToCart(product);
                  }}
                >
                  Move to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
