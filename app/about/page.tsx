import { Heart, ShoppingBag, Users, Globe, Award, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
              <Link href="/collections" className="text-gray-700 hover:text-pink-600 transition font-medium">
                Collections
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-pink-600 transition font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-pink-600 font-bold transition">
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
            About Us
          </h1>
          <p className="text-xl text-gray-700">
            Bringing authentic Peruvian craftsmanship to families worldwide
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              stuffwhenIsleep was born from a deep love for Peruvian culture and a passion for providing 
              the highest quality baby clothes to families around the world. Our journey began when we 
              discovered the incredible craftsmanship of Peruvian artisans who have been creating beautiful 
              textiles for generations.
            </p>
            <p>
              Every piece in our collection is handcrafted by skilled artisans in Peru using traditional 
              techniques passed down through families. We work directly with these talented craftspeople, 
              ensuring fair wages and supporting their communities while bringing you authentic, 
              high-quality baby clothes.
            </p>
            <p>
              We believe that every baby deserves to be wrapped in comfort and love. That&apos;s why we carefully 
              select only the softest alpaca wool and finest materials, ensuring each piece is gentle on 
              your baby&apos;s delicate skin while keeping them warm and cozy.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ValueCard
            icon={<Heart className="w-8 h-8" />}
            title="Handcrafted with Love"
            description="Every piece is made by hand with care and attention to detail"
          />
          <ValueCard
            icon={<Globe className="w-8 h-8" />}
            title="Authentic Peruvian"
            description="100% genuine products directly from Peru's finest artisans"
          />
          <ValueCard
            icon={<Award className="w-8 h-8" />}
            title="Premium Quality"
            description="Only the finest materials and craftsmanship for your baby"
          />
          <ValueCard
            icon={<Users className="w-8 h-8" />}
            title="Supporting Communities"
            description="Fair trade practices that empower Peruvian artisan families"
          />
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8 text-center">
          <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            To connect families worldwide with the beauty and quality of authentic Peruvian baby clothes, 
            while supporting the artisan communities that make them possible. We&apos;re committed to sustainable, 
            ethical practices and bringing joy to both makers and families.
          </p>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
