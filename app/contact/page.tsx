import { Heart, ShoppingBag, Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-pink-600 font-bold transition">
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700">
            We&apos;d love to hear from you! Send us a message anytime.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  info="hello@stuffwhenisleep.com"
                />
                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  info="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Location"
                  info="Lima, Peru"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (EST)</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM (EST)</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">FAQ</h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-sm">
                  <strong>Q: How long does shipping take?</strong><br />
                  A: International shipping typically takes 7-14 business days.
                </p>
                <p className="text-sm">
                  <strong>Q: Do you offer returns?</strong><br />
                  A: Yes! We offer 30-day returns on all unworn items.
                </p>
                <p className="text-sm">
                  <strong>Q: Are your products machine washable?</strong><br />
                  A: We recommend gentle hand washing for best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, info }: { icon: React.ReactNode; title: string; info: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  );
}
