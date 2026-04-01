import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Heart, Star, Truck, RefreshCw, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || '');
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>('description');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const addItem = useCartStore(state => state.addItem);
  const { toggleItem, hasItem } = useWishlistStore();

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Button className="mt-6" onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const isWishlisted = hasItem(product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    
    if (!selectedSize || !selectedColor) {
      setErrorMsg('Please select a size and color.');
      return;
    }
    
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    
    setSuccessMsg('Added to cart!');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center text-sm text-neutral-500">
        <button onClick={() => navigate('/')} className="hover:text-black">Home</button>
        <ChevronRight size={14} className="mx-2" />
        <button onClick={() => navigate(`/shop/${product.category.toLowerCase()}`)} className="hover:text-black">{product.category}</button>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-neutral-900">{product.name}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* Product Images */}
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:w-24 shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[3/4] w-20 lg:w-full shrink-0 overflow-hidden bg-neutral-100 ${
                  activeImageIndex === idx ? 'ring-2 ring-black ring-offset-2' : 'ring-1 ring-transparent hover:ring-neutral-300'
                }`}
              >
                <img src={img} alt={`${product.name} view ${idx + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="relative aspect-[3/4] w-full bg-neutral-100">
            <img
              src={product.images[activeImageIndex]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black">
                New
              </span>
            )}
            {product.compareAtPrice && (
              <span className="absolute top-4 left-4 bg-red-600 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
                Sale
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">{product.name}</h1>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {product.compareAtPrice && (
                <span className="text-xl text-neutral-500 line-through">${product.compareAtPrice}</span>
              )}
              <span className={`text-2xl font-medium ${product.compareAtPrice ? 'text-red-600' : 'text-neutral-900'}`}>
                ${product.price}
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-neutral-500">
              <div className="flex text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="ml-2 underline cursor-pointer">4.9 (128 reviews)</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-neutral-900">Color: {selectedColor || 'Select a color'}</h3>
            <div className="mt-3 flex items-center gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setSelectedColor(color.name);
                    setErrorMsg(null);
                  }}
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    selectedColor === color.name ? 'border-black' : 'border-transparent hover:border-neutral-300'
                  }`}
                  title={color.name}
                >
                  <span
                    className="h-8 w-8 rounded-full border border-neutral-200"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-900">Size: {selectedSize || 'Select a size'}</h3>
              <button className="text-sm text-neutral-500 underline hover:text-black">Size Guide</button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setErrorMsg(null);
                  }}
                  className={`flex h-12 items-center justify-center border text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 bg-white text-neutral-900 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <div className="mt-4 text-sm font-medium text-red-600">
              {errorMsg}
            </div>
          )}
          
          {successMsg && (
            <div className="mt-4 text-sm font-medium text-green-600">
              {successMsg}
            </div>
          )}

          <div className="mt-8 flex gap-4">
            <div className="flex h-14 w-32 items-center justify-between border border-neutral-200 px-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-neutral-500 hover:text-black"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-neutral-500 hover:text-black"
              >
                +
              </button>
            </div>
            <Button 
              className="flex-1 h-14 text-base" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <button
              onClick={() => toggleItem(product.id)}
              className="flex h-14 w-14 items-center justify-center border border-neutral-200 text-neutral-500 hover:border-black hover:text-black transition-colors"
            >
              <Heart size={24} className={isWishlisted ? "fill-black text-black" : ""} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-y border-neutral-200 py-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-neutral-400" />
              <span className="text-sm text-neutral-600">Free shipping over $150</span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-neutral-400" />
              <span className="text-sm text-neutral-600">30-day free returns</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-neutral-400" />
              <span className="text-sm text-neutral-600">Lifetime guarantee</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-6 divide-y divide-neutral-200 border-b border-neutral-200">
            <div className="py-4">
              <button
                onClick={() => toggleSection('description')}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-sm font-medium text-neutral-900">Description</span>
                {expandedSection === 'description' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedSection === 'description' && (
                <div className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  {product.description}
                </div>
              )}
            </div>
            
            <div className="py-4">
              <button
                onClick={() => toggleSection('materials')}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-sm font-medium text-neutral-900">Materials & Care</span>
                {expandedSection === 'materials' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedSection === 'materials' && (
                <div className="mt-4 text-sm text-neutral-600 leading-relaxed space-y-2">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.careInstructions}</p>
                </div>
              )}
            </div>

            <div className="py-4">
              <button
                onClick={() => toggleSection('fit')}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-sm font-medium text-neutral-900">Fit Notes</span>
                {expandedSection === 'fit' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {expandedSection === 'fit' && (
                <div className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  {product.fitNotes}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
