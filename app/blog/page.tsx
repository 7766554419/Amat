import { Heart, ShoppingBag, BookOpen, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Best Books for New Parents",
    excerpt: "Discover essential reading for your parenting journey. From sleep training to developmental milestones, these books will guide you through the first year.",
    date: "January 15, 2025",
    category: "Book Recommendations",
  },
  {
    id: 2,
    title: "Traditional Peruvian Lullabies",
    excerpt: "Soothing songs passed down through generations. Learn about the beautiful tradition of Peruvian lullabies and their cultural significance.",
    date: "January 10, 2025",
    category: "Culture",
  },
  {
    id: 3,
    title: "Baby Care Tips & Tricks",
    excerpt: "Expert advice for caring for your little one. Practical tips from experienced parents and pediatricians.",
    date: "January 5, 2025",
    category: "Parenting",
  },
  {
    id: 4,
    title: "The Art of Peruvian Textiles",
    excerpt: "Explore the rich history and craftsmanship behind traditional Peruvian baby clothes and textiles.",
    date: "December 28, 2024",
    category: "Culture",
  },
  {
    id: 5,
    title: "Reading to Your Baby: A Guide",
    excerpt: "Why reading to your baby matters and how to make it a daily habit. Book suggestions for every age.",
    date: "December 20, 2024",
    category: "Book Recommendations",
  },
  {
    id: 6,
    title: "Alpaca Wool: Nature's Perfect Fiber",
    excerpt: "Learn why alpaca wool is the ideal choice for baby clothes - soft, warm, and hypoallergenic.",
    date: "December 15, 2024",
    category: "Products",
  },
];

export default function BlogPage() {
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
              <Link href="/blog" className="text-pink-600 font-bold transition">
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
          <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Reading Corner
          </h1>
          <p className="text-xl text-gray-700">
            Book recommendations, parenting tips, and cultural insights
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ title, excerpt, date, category }: { title: string; excerpt: string; date: string; category: string }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-purple-600 uppercase">{category}</span>
        <div className="flex items-center gap-1 text-purple-600">
          <Star className="w-4 h-4" fill="currentColor" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{date}</span>
        <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-semibold">
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
