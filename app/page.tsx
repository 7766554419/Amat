'use client';

import { Heart, ShoppingBag, BookOpen, Star, ArrowRight, Package, Shield, Truck, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

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
                {t('nav.home')}
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-pink-600 transition font-medium">
                {t('nav.shop')}
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-pink-600 transition font-medium">
                {t('nav.collections')}
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-pink-600 transition font-medium">
                {t('nav.blog')}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition font-medium">
                {t('nav.about')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition font-medium">
                {t('nav.contact')}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
                  <Globe className="w-5 h-5" />
                  <span className="hidden md:inline">{language.toUpperCase()}</span>
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`w-full px-4 py-2 text-left hover:bg-pink-50 rounded-t-lg transition ${language === 'en' ? 'bg-pink-100 font-semibold' : ''}`}
                  >
                    🇬🇧 English
                  </button>
                  <button 
                    onClick={() => setLanguage('fr')}
                    className={`w-full px-4 py-2 text-left hover:bg-pink-50 transition ${language === 'fr' ? 'bg-pink-100 font-semibold' : ''}`}
                  >
                    🇫🇷 Français
                  </button>
                  <button 
                    onClick={() => setLanguage('es')}
                    className={`w-full px-4 py-2 text-left hover:bg-pink-50 rounded-b-lg transition ${language === 'es' ? 'bg-pink-100 font-semibold' : ''}`}
                  >
                    🇪🇸 Español
                  </button>
                </div>
              </div>
              <button className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
                <ShoppingBag className="w-5 h-5" />
                <span className="hidden md:inline">{t('nav.cart')} (0)</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-script mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/shop" className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2">
                {t('hero.shopNow')} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/collections" className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all border-2 border-pink-600">
                {t('hero.viewCollections')}
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
              title={t('features.authentic.title')}
              description={t('features.authentic.description')}
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title={t('features.quality.title')}
              description={t('features.quality.description')}
            />
            <FeatureCard
              icon={<Truck className="w-8 h-8" />}
              title={t('features.shipping.title')}
              description={t('features.shipping.description')}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('products.title')}</h2>
            <p className="text-xl text-gray-600">{t('products.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              name={t('products.items.sweater')}
              price="$45.00"
              addToCart={t('products.addToCart')}
            />
            <ProductCard
              name={t('products.items.hat')}
              price="$28.00"
              addToCart={t('products.addToCart')}
            />
            <ProductCard
              name={t('products.items.blanket')}
              price="$65.00"
              addToCart={t('products.addToCart')}
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="inline-flex items-center gap-2 text-pink-600 hover:text-purple-600 font-semibold text-lg">
              {t('products.viewAll')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('blog.title')}</h2>
            <p className="text-xl text-gray-600">{t('blog.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title={t('blog.articles.books.title')}
              excerpt={t('blog.articles.books.excerpt')}
              date="January 2025"
            />
            <BlogCard
              title={t('blog.articles.lullabies.title')}
              excerpt={t('blog.articles.lullabies.excerpt')}
              date="December 2024"
            />
            <BlogCard
              title={t('blog.articles.tips.title')}
              excerpt={t('blog.articles.tips.excerpt')}
              date="November 2024"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-semibold text-lg">
              {t('blog.readMore')} <ArrowRight className="w-5 h-5" />
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
                <span className="text-2xl font-script text-gray-900">Cloud Nine Baby</span>
              </div>
              <p className="text-gray-600">{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">{t('footer.shop')}</h3>
              <ul className="space-y-2">
                <li><Link href="/shop" className="text-gray-600 hover:text-pink-600">{t('footer.allProducts')}</Link></li>
                <li><Link href="/collections" className="text-gray-600 hover:text-pink-600">{t('nav.collections')}</Link></li>
                <li><Link href="/shop?new=true" className="text-gray-600 hover:text-pink-600">{t('footer.newArrivals')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">{t('footer.company')}</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-pink-600">{t('nav.about')}</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-pink-600">{t('nav.contact')}</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-pink-600">{t('nav.blog')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">{t('footer.newsletter')}</h3>
              <p className="text-gray-600 mb-4">{t('footer.newsletterText')}</p>
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
              />
              <button className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>{t('footer.copyright')}</p>
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

function ProductCard({ name, price, addToCart }: { name: string; price: string; addToCart: string }) {
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
            {addToCart}
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
