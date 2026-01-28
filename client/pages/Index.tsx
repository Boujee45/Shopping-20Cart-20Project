import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Star, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
}

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    rating: 4.8,
    category: 'Electronics',
    description: 'High-quality sound with noise cancellation',
  },
  {
    id: '2',
    name: 'Smartwatch Pro',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    rating: 4.9,
    category: 'Electronics',
    description: 'Advanced fitness tracking and notifications',
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    rating: 4.6,
    category: 'Fashion',
    description: 'UV protection with stylish design',
  },
  {
    id: '4',
    name: 'Leather Backpack',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    rating: 4.7,
    category: 'Fashion',
    description: 'Durable leather with laptop compartment',
  },
  {
    id: '5',
    name: 'Coffee Maker Deluxe',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=500&h=500&fit=crop',
    rating: 4.5,
    category: 'Home',
    description: 'Programmable brewing with temperature control',
  },
  {
    id: '6',
    name: 'Portable Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1589003077984-894fdbb6d1b6?w=500&h=500&fit=crop',
    rating: 4.4,
    category: 'Electronics',
    description: 'Waterproof with 360° sound',
  },
  {
    id: '7',
    name: 'Running Shoes',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    rating: 4.8,
    category: 'Sports',
    description: 'Lightweight and comfortable',
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
    rating: 4.7,
    category: 'Sports',
    description: 'Non-slip surface with carrying strap',
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-muted h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-1">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-muted stroke-muted-foreground'}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-2">({product.rating})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-primary text-white hover:bg-opacity-90'
            }`}
          >
            {isAdded ? '✓ Added' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['Electronics', 'Fashion', 'Home', 'Sports'];
  const filteredProducts = selectedCategory
    ? FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory)
    : FEATURED_PRODUCTS;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Discover Amazing Products
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Shop the latest trends in electronics, fashion, home goods, and sports equipment. 
                Quality products at unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Start Shopping
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop"
                  alt="Shopping"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Categories</h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-sm text-primary hover:underline font-semibold"
            >
              Clear Filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            {selectedCategory ? `${selectedCategory} Products` : 'Featured Products'}
          </h2>
          <Link to="/" className="flex items-center space-x-2 text-primary hover:underline font-semibold">
            <span>View All</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">100% secure transactions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Track Order</a></li>
                <li><a href="#" className="hover:text-primary">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">Facebook</a></li>
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; 2024 ShopHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <span className="text-sm text-muted-foreground">Secure payments by Stripe</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
