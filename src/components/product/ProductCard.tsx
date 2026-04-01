import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../data/products';
import { useWishlistStore } from '../../store/wishlistStore';
import { cn } from '../../lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  key?: React.Key;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { toggleItem, hasItem } = useWishlistStore();
  const isWishlisted = hasItem(product.id);

  return (
    <div className={cn("group flex flex-col", className)}>
      <div className="relative aspect-[2/3] overflow-hidden bg-neutral-100 mb-4">
        <Link to={`/product/${product.id}`} className="absolute inset-0 z-10">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />
          )}
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-white px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-black">
              New
            </span>
          )}
          {product.compareAtPrice && (
            <span className="bg-red-600 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleItem(product.id);
          }}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            className={cn("transition-colors", isWishlisted ? "fill-black text-black" : "text-black")}
          />
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-2">
          <Link to={`/product/${product.id}`} className="text-sm font-medium text-neutral-900 hover:underline">
            {product.name}
          </Link>
          <div className="flex items-center gap-2 text-sm">
            {product.compareAtPrice && (
              <span className="text-neutral-500 line-through">${product.compareAtPrice}</span>
            )}
            <span className={cn("font-medium", product.compareAtPrice ? "text-red-600" : "text-neutral-900")}>
              ${product.price}
            </span>
          </div>
        </div>
        <p className="text-xs text-neutral-500">{product.colors.length} Color{product.colors.length !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
}
