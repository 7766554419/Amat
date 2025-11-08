import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const collections = [
  {
    id: 1,
    name: "Alpaca Essentials",
    description: "Soft and warm alpaca wool pieces for ultimate comfort",
    itemCount: 12,
  },
  {
    id: 2,
    name: "Traditional Peruvian",
    description: "Authentic designs passed down through generations",
    itemCount: 18,
  },
  {
    id: 3,
    name: "Newborn Collection",
    description: "Gentle and cozy pieces perfect for newborns",
    itemCount: 15,
  },
  {
    id: 4,
    name: "Winter Warmth",
    description: "Extra cozy pieces for cold weather",
    itemCount: 10,
  },
  {
    id: 5,
    name: "Gift Sets",
    description: "Beautifully curated sets perfect for gifting",
    itemCount: 8,
  },
  {
    id: 6,
    name: "Handwoven Treasures",
    description: "Exquisite handwoven pieces by master artisans",
    itemCount: 14,
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 py-4">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-600" fill="currentColor" />
              <span className="text-3xl font-script bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
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
              <Link href="/collections" className="text-pink-600 font-bold transition">
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
            Our Collections
          </h1>
          <p className="text-xl text-gray-700">
            Curated selections of our finest Peruvian baby clothes
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} {...collection} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CollectionCard({ name, description, itemCount }: { name: string; description: string; itemCount: number }) {
  return (
    <Link href="/shop">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
        <div className="h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-200 flex items-center justify-center">
          <Heart className="w-32 h-32 text-white/50" fill="currentColor" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-purple-600 font-semibold">{itemCount} items</span>
            <span className="inline-flex items-center gap-2 text-pink-600 hover:text-purple-600 font-semibold">
              View Collection <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
