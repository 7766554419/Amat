import { Heart, ShoppingBag, Filter } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, name: "Alpaca Baby Sweater", price: "$45.00", category: "Sweaters" },
  { id: 2, name: "Traditional Peruvian Hat", price: "$28.00", category: "Accessories" },
  { id: 3, name: "Handwoven Baby Blanket", price: "$65.00", category: "Blankets" },
  { id: 4, name: "Colorful Baby Poncho", price: "$38.00", category: "Ponchos" },
  { id: 5, name: "Soft Alpaca Booties", price: "$22.00", category: "Footwear" },
  { id: 6, name: "Baby Cardigan Set", price: "$52.00", category: "Sets" },
  { id: 7, name: "Traditional Chullo Hat", price: "$30.00", category: "Accessories" },
  { id: 8, name: "Peruvian Baby Dress", price: "$48.00", category: "Dresses" },
  { id: 9, name: "Alpaca Baby Mittens", price: "$18.00", category: "Accessories" },
];

export default function ShopPage() {
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
              <Link href="/shop" className="text-pink-600 font-bold transition">
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

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Shop All Products
          </h1>
          <p className="text-xl text-gray-700">
            Discover our complete collection of authentic Peruvian baby clothes
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-pink-600" />
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {["All", "Sweaters", "Ponchos", "Blankets", "Accessories", "Sets", "Dresses", "Footwear"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-pink-600" />
                      <span className="text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-pink-600" />
                    <span className="text-gray-700">Under $25</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-pink-600" />
                    <span className="text-gray-700">$25 - $50</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-pink-600" />
                    <span className="text-gray-700">Over $50</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Size</h3>
                <div className="space-y-2">
                  {["0-3 months", "3-6 months", "6-12 months", "12-18 months"].map((size) => (
                    <label key={size} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-pink-600" />
                      <span className="text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">{products.length} products found</p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ name, price, category }: { name: string; price: string; category: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
      <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative group">
        <ShoppingBag className="w-24 h-24 text-pink-300" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-purple-600 uppercase">{category}</span>
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
