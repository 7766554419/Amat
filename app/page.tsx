import { Heart, ShoppingBag, BookOpen, Star, ArrowRight, Package, Shield, Truck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-600" fill="currentColor" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Cloud Nine Baby
              </span>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-pink-600 transition font-medium">
                Shop
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-pink-600 transition font-medium">
                Collections
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-pink-600 transition font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition font-medium">
                Contact
              </Link>
            </div>
            <button className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden md:inline">Cart (0)</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              CLOUD NINE BABY
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              A collection to make you feel like a baby
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/shop" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/collections" className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all border-2 border-pink-600">
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Package className="w-8 h-8" />}
              title="Authentic"
              description="100% genuine handcrafted baby clothes from Peru"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Premium Quality"
              description="Soft, comfortable fabrics safe for your baby's skin"
            />
            <FeatureCard
              icon={<Truck className="w-8 h-8" />}
              title="Fast Shipping"
              description="Quick and secure delivery to your doorstep"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most loved baby clothes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              name="Alpaca Baby Sweater"
              price="$45.00"
            />
            <ProductCard
              name="Traditional Peruvian Hat"
              price="$28.00"
            />
            <ProductCard
              name="Handwoven Baby Blanket"
              price="$65.00"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="inline-flex items-center gap-2 text-pink-600 hover:text-purple-600 font-semibold text-lg">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reading Corner</h2>
            <p className="text-xl text-gray-600">Book recommendations and parenting insights</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title="Best Books for New Parents"
              excerpt="Discover essential reading for your parenting journey..."
              date="January 2025"
            />
            <BlogCard
              title="Traditional Peruvian Lullabies"
              excerpt="Soothing songs passed down through generations..."
              date="December 2024"
            />
            <BlogCard
              title="Baby Care Tips & Tricks"
              excerpt="Expert advice for caring for your little one..."
              date="November 2024"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-semibold text-lg">
              Read More Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-pink-600" fill="currentColor" />
                <span className="font-bold text-gray-900">Cloud Nine Baby</span>
              </div>
              <p className="text-gray-600">Authentic Peruvian baby clothes crafted with love</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/shop" className="text-gray-600 hover:text-pink-600">All Products</Link></li>
                <li><Link href="/collections" className="text-gray-600 hover:text-pink-600">Collections</Link></li>
                <li><Link href="/shop?new=true" className="text-gray-600 hover:text-pink-600">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-pink-600">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-pink-600">Contact</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-pink-600">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe for updates and special offers</p>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
              />
              <button className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>© 2025 Cloud Nine Baby. All rights reserved. Handcrafted in Peru with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
      <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
        <Package className="w-24 h-24 text-pink-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-pink-600">{price}</span>
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ title, excerpt, date }: { title: string; excerpt: string; date: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
      <div className="flex items-center gap-2 text-purple-600 mb-4">
        <Star className="w-5 h-5" fill="currentColor" />
        <span className="text-sm font-semibold">{date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-semibold">
        Read More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
