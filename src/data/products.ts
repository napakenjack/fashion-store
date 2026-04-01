export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isBestSeller?: boolean;
  tags: string[];
  materials: string;
  careInstructions: string;
  fitNotes: string;
}

export const products: Product[] = [
  {
    id: 'p-1',
    name: 'The Essential Heavyweight Tee',
    description: 'Crafted from 100% organic heavyweight cotton, this t-shirt offers a structured, relaxed fit that holds its shape all day. Perfect for layering or wearing on its own.',
    price: 45,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop'
    ],
    category: 'Men',
    subCategory: 'T-Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Heather Grey', hex: '#9CA3AF' }
    ],
    isBestSeller: true,
    tags: ['essentials', 'basics'],
    materials: '100% Organic Cotton, 240gsm',
    careInstructions: 'Machine wash cold with like colors. Tumble dry low. Do not bleach.',
    fitNotes: 'Relaxed, slightly boxy fit. Take your normal size for the intended look, or size down for a more fitted feel.'
  },
  {
    id: 'p-2',
    name: 'Oversized Wool Blend Coat',
    description: 'A timeless silhouette updated with a modern, oversized fit. Made from a premium wool blend, this coat provides exceptional warmth without the bulk. Features dropped shoulders and deep pockets.',
    price: 285,
    compareAtPrice: 350,
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop'
    ],
    category: 'Women',
    subCategory: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Charcoal', hex: '#36454F' }
    ],
    isNew: true,
    tags: ['outerwear', 'winter'],
    materials: '60% Wool, 30% Polyester, 10% Cashmere. Viscose lining.',
    careInstructions: 'Dry clean only. Do not iron.',
    fitNotes: 'Intentionally oversized. We recommend taking your normal size for a relaxed look, or sizing down if you prefer a closer fit.'
  },
  {
    id: 'p-3',
    name: 'Everyday Straight Leg Denim',
    description: 'The perfect vintage-inspired straight leg jean. Made from rigid 100% cotton denim that breaks in beautifully over time to mold to your body.',
    price: 120,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1000&auto=format&fit=crop'
    ],
    category: 'Women',
    subCategory: 'Jeans',
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
    colors: [
      { name: 'Vintage Wash', hex: '#5E7B9E' },
      { name: 'Washed Black', hex: '#2C2C2C' }
    ],
    isBestSeller: true,
    tags: ['denim', 'bottoms'],
    materials: '100% Cotton Denim, 13oz',
    careInstructions: 'Wash inside out on cold. Hang dry to maintain shape and color.',
    fitNotes: 'High rise, straight leg. Runs true to size. Will feel snug at first but relaxes with wear.'
  },
  {
    id: 'p-4',
    name: 'Merino Wool Crewneck Sweater',
    description: 'A versatile, lightweight sweater knitted from ultra-fine Merino wool. Naturally breathable and temperature-regulating, making it perfect for year-round wear.',
    price: 110,
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1000&auto=format&fit=crop'
    ],
    category: 'Men',
    subCategory: 'Knitwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Navy', hex: '#000080' },
      { name: 'Olive', hex: '#556B2F' },
      { name: 'Oatmeal', hex: '#E4D5B7' }
    ],
    tags: ['knitwear', 'essentials'],
    materials: '100% Extra Fine Merino Wool',
    careInstructions: 'Hand wash cold with mild detergent. Lay flat to dry. Do not wring.',
    fitNotes: 'Slim-regular fit. Designed to be worn over a t-shirt or under a jacket.'
  },
  {
    id: 'p-5',
    name: 'Structured Midi Dress',
    description: 'An elegant midi dress featuring a square neckline, structured bodice, and a flowing skirt. Perfect for transitioning from day to evening.',
    price: 165,
    images: [
      'https://plus.unsplash.com/premium_photo-1673384389447-5a4364e7c93b?q=80&w=688&auto=format&fit=crop',
      'https://plus.unsplash.com/premium_photo-1673384389967-e31ea744f3eb?q=80&w=688&auto=format&fit=crop'
    ],
    category: 'Women',
    subCategory: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Rust', hex: '#B7410E' }
    ],
    isNew: true,
    tags: ['dresses', 'evening'],
    materials: '65% Viscose, 30% Nylon, 5% Elastane',
    careInstructions: 'Machine wash cold on gentle cycle. Line dry.',
    fitNotes: 'Fitted through the bodice, relaxed through the skirt. True to size.'
  },
  {
    id: 'p-6',
    name: 'Relaxed Fit Chino Trousers',
    description: 'A modern take on the classic chino. Featuring a relaxed fit through the thigh with a slight taper to the hem. Made from a durable cotton twill with a hint of stretch.',
    price: 95,
    compareAtPrice: 110,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1000&auto=format&fit=crop'
    ],
    category: 'Men',
    subCategory: 'Trousers',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Khaki', hex: '#F0E68C' },
      { name: 'Navy', hex: '#000080' },
      { name: 'Stone', hex: '#877F6C' }
    ],
    tags: ['bottoms', 'workwear'],
    materials: '97% Cotton, 3% Elastane',
    careInstructions: 'Machine wash cold. Tumble dry low.',
    fitNotes: 'Relaxed fit. Mid-rise.'
  },
  {
    id: 'p-7',
    name: 'French Terry Hoodie',
    description: 'Your new favorite hoodie. Made from custom-milled French terry that is incredibly soft on the inside and smooth on the outside. Features a double-lined hood and kangaroo pocket.',
    price: 85,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?q=80&w=687&auto=format&fit=crop'
    ],
    category: 'Unisex',
    subCategory: 'Hoodies',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Washed Black', hex: '#2C2C2C' },
      { name: 'Bone', hex: '#E3DAC9' },
      { name: 'Sage', hex: '#9DC183' }
    ],
    isBestSeller: true,
    tags: ['loungewear', 'essentials'],
    materials: '100% Cotton French Terry, 400gsm',
    careInstructions: 'Machine wash cold. Tumble dry low.',
    fitNotes: 'Slightly oversized, relaxed fit.'
  },
  {
    id: 'p-8',
    name: 'Leather Crossbody Bag',
    description: 'A minimalist crossbody bag crafted from full-grain Italian leather. Features an adjustable strap, internal zip pocket, and magnetic closure. The perfect size for your daily essentials.',
    price: 195,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop'
    ],
    category: 'Accessories',
    subCategory: 'Bags',
    sizes: ['One Size'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Cognac', hex: '#9A463D' }
    ],
    tags: ['accessories', 'leather'],
    materials: '100% Full-Grain Italian Leather. Cotton canvas lining.',
    careInstructions: 'Wipe clean with a damp cloth. Use leather conditioner every 6 months.',
    fitNotes: 'Dimensions: 8" W x 6" H x 2.5" D. Strap drop: 20" - 24".'
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) => products.filter(p => p.category.toLowerCase() === category.toLowerCase());
export const getNewArrivals = () => products.filter(p => p.isNew);
export const getBestSellers = () => products.filter(p => p.isBestSeller);
export const getSaleProducts = () => products.filter(p => p.compareAtPrice !== undefined);
