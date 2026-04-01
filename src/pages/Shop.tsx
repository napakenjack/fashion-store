import { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { products } from '../data/products';
import { subCategories } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/Button';

export function Shop() {
  const { category } = useParams<{ category?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filters
  const sort = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('q') || '';
  const selectedSubCategories = searchParams.getAll('subCategory');
  const selectedSizes = searchParams.getAll('size');
  const selectedColors = searchParams.getAll('color');

  // Derived data
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.subCategory.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    // Category filter from URL
    if (category) {
      if (category === 'new-arrivals') {
        result = result.filter(p => p.isNew);
      } else if (category === 'best-sellers') {
        result = result.filter(p => p.isBestSeller);
      } else if (category === 'sale') {
        result = result.filter(p => p.compareAtPrice !== undefined);
      } else {
        result = result.filter(p => p.category.toLowerCase() === category.toLowerCase() || p.tags.includes(category.toLowerCase()));
      }
    }

    // Subcategory filter
    if (selectedSubCategories.length > 0) {
      result = result.filter(p => selectedSubCategories.includes(p.subCategory));
    }

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    // Color filter
    if (selectedColors.length > 0) {
      result = result.filter(p => p.colors.some(c => selectedColors.includes(c.name)));
    }

    // Sorting
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      default:
        // Featured - keep default order
        break;
    }

    return result;
  }, [category, searchQuery, sort, selectedSubCategories, selectedSizes, selectedColors]);

  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes))).sort();
  const allColors = Array.from(new Set(products.flatMap(p => p.colors.map(c => c.name)))).sort();

  const handleFilterChange = (type: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    const currentValues = newParams.getAll(type);
    
    if (currentValues.includes(value)) {
      newParams.delete(type);
      currentValues.filter(v => v !== value).forEach(v => newParams.append(type, v));
    } else {
      newParams.append(type, value);
    }
    
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    const newParams = new URLSearchParams();
    if (sort !== 'featured') newParams.set('sort', sort);
    if (searchQuery) newParams.set('q', searchQuery);
    setSearchParams(newParams);
  };

  const getPageTitle = () => {
    if (searchQuery) return `Search Results for "${searchQuery}"`;
    if (!category) return 'All Products';
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 border-b border-neutral-200 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">{getPageTitle()}</h1>
          <p className="mt-2 text-sm text-neutral-500">{filteredProducts.length} products</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 text-sm font-medium text-neutral-700 lg:hidden"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter size={16} />
            Filters
          </button>
          
          <div className="relative ml-auto flex items-center gap-2">
            <span className="text-sm text-neutral-500">Sort by:</span>
            <select
              className="appearance-none bg-transparent py-1 pl-2 pr-8 text-sm font-medium text-neutral-900 focus:outline-none"
              value={sort}
              onChange={(e) => {
                const newParams = new URLSearchParams(searchParams);
                newParams.set('sort', e.target.value);
                setSearchParams(newParams);
              }}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Desktop Sidebar Filters */}
        <div className="hidden w-64 flex-shrink-0 lg:block">
          <div className="sticky top-24 space-y-8">
            {(selectedSubCategories.length > 0 || selectedSizes.length > 0 || selectedColors.length > 0) && (
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Active Filters</h3>
                <button onClick={clearFilters} className="text-xs text-neutral-500 hover:text-black underline">Clear All</button>
              </div>
            )}

            {/* Category Filter */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Category</h3>
              <div className="space-y-3">
                {subCategories.map((sub) => (
                  <label key={sub} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded-none border-neutral-300 text-black focus:ring-black"
                      checked={selectedSubCategories.includes(sub)}
                      onChange={() => handleFilterChange('subCategory', sub)}
                    />
                    <span className="text-sm text-neutral-600">{sub}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {allSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleFilterChange('size', size)}
                    className={`flex h-10 items-center justify-center border text-sm transition-colors ${
                      selectedSizes.includes(size)
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Color</h3>
              <div className="space-y-3">
                {allColors.map((color) => (
                  <label key={color} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded-none border-neutral-300 text-black focus:ring-black"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleFilterChange('color', color)}
                    />
                    <span className="text-sm text-neutral-600">{color}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4 pb-4 border-b border-neutral-200">
                <h2 className="text-lg font-medium text-neutral-900">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 text-neutral-400 hover:text-neutral-500">
                  <X size={20} />
                </button>
              </div>

              <div className="px-4 py-6 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Category</h3>
                  <div className="space-y-3">
                    {subCategories.map((sub) => (
                      <label key={sub} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded-none border-neutral-300 text-black focus:ring-black"
                          checked={selectedSubCategories.includes(sub)}
                          onChange={() => handleFilterChange('subCategory', sub)}
                        />
                        <span className="text-sm text-neutral-600">{sub}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Size</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => handleFilterChange('size', size)}
                        className={`flex h-10 items-center justify-center border text-sm transition-colors ${
                          selectedSizes.includes(size)
                            ? 'border-black bg-black text-white'
                            : 'border-neutral-200 bg-white text-neutral-600 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto border-t border-neutral-200 p-4">
                <div className="flex gap-4">
                  <Button variant="outline" className="w-full" onClick={clearFilters}>Clear</Button>
                  <Button className="w-full" onClick={() => setIsFilterOpen(false)}>Apply</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="text-lg font-medium text-neutral-900">No products found</h3>
              <p className="mt-2 text-sm text-neutral-500">Try adjusting your filters or search terms.</p>
              <Button variant="outline" className="mt-6" onClick={clearFilters}>Clear all filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
