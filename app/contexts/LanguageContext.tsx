'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es', 'fr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      shop: 'Shop',
      collections: 'Collections',
      blog: 'Blog',
      about: 'About Us',
      contact: 'Contact',
      cart: 'Cart',
    },
    hero: {
      title: 'Cloud Nine Baby',
      subtitle: 'A collection to make you feel like a baby',
      shopNow: 'Shop Now',
      viewCollections: 'View Collections',
    },
    features: {
      authentic: {
        title: 'Authentic',
        description: '100% genuine handcrafted baby clothes from Peru',
      },
      quality: {
        title: 'Premium Quality',
        description: "Soft, comfortable fabrics safe for your baby's skin",
      },
      shipping: {
        title: 'Fast Shipping',
        description: 'Quick and secure delivery to your doorstep',
      },
    },
    products: {
      title: 'Featured Products',
      subtitle: 'Discover our most loved baby clothes',
      viewAll: 'View All Products',
      addToCart: 'Add to Cart',
      items: {
        sweater: 'Alpaca Baby Sweater',
        hat: 'Traditional Peruvian Hat',
        blanket: 'Handwoven Baby Blanket',
      },
    },
    blog: {
      title: 'Reading Corner',
      subtitle: 'Book recommendations and parenting insights',
      readMore: 'Read More Articles',
      articles: {
        books: {
          title: 'Best Books for New Parents',
          excerpt: 'Discover essential reading for your parenting journey...',
        },
        lullabies: {
          title: 'Traditional Peruvian Lullabies',
          excerpt: 'Soothing songs passed down through generations...',
        },
        tips: {
          title: 'Baby Care Tips & Tricks',
          excerpt: 'Expert advice for caring for your little one...',
        },
      },
    },
    footer: {
      description: 'Authentic Peruvian baby clothes crafted with love',
      shop: 'Shop',
      allProducts: 'All Products',
      newArrivals: 'New Arrivals',
      company: 'Company',
      newsletter: 'Newsletter',
      newsletterText: 'Subscribe for updates and special offers',
      emailPlaceholder: 'Your email',
      subscribe: 'Subscribe',
      copyright: '© 2025 Cloud Nine Baby. All rights reserved. Handcrafted in Peru with ❤️',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      shop: 'Tienda',
      collections: 'Colecciones',
      blog: 'Blog',
      about: 'Nosotros',
      contact: 'Contacto',
      cart: 'Carrito',
    },
    hero: {
      title: 'Cloud Nine Baby',
      subtitle: 'Una colección para hacerte sentir como un bebé',
      shopNow: 'Comprar Ahora',
      viewCollections: 'Ver Colecciones',
    },
    features: {
      authentic: {
        title: 'Auténtico',
        description: 'Ropa de bebé 100% genuina hecha a mano desde Perú',
      },
      quality: {
        title: 'Calidad Premium',
        description: 'Telas suaves y cómodas seguras para la piel de tu bebé',
      },
      shipping: {
        title: 'Envío Rápido',
        description: 'Entrega rápida y segura a tu puerta',
      },
    },
    products: {
      title: 'Productos Destacados',
      subtitle: 'Descubre nuestra ropa de bebé más querida',
      viewAll: 'Ver Todos los Productos',
      addToCart: 'Agregar al Carrito',
      items: {
        sweater: 'Suéter de Bebé de Alpaca',
        hat: 'Gorro Tradicional Peruano',
        blanket: 'Manta de Bebé Tejida a Mano',
      },
    },
    blog: {
      title: 'Rincón de Lectura',
      subtitle: 'Recomendaciones de libros y consejos para padres',
      readMore: 'Leer Más Artículos',
      articles: {
        books: {
          title: 'Mejores Libros para Nuevos Padres',
          excerpt: 'Descubre lecturas esenciales para tu viaje como padre...',
        },
        lullabies: {
          title: 'Canciones de Cuna Peruanas Tradicionales',
          excerpt: 'Canciones relajantes transmitidas a través de generaciones...',
        },
        tips: {
          title: 'Consejos y Trucos para el Cuidado del Bebé',
          excerpt: 'Consejos expertos para cuidar a tu pequeño...',
        },
      },
    },
    footer: {
      description: 'Ropa de bebé peruana auténtica hecha con amor',
      shop: 'Tienda',
      allProducts: 'Todos los Productos',
      newArrivals: 'Nuevos Productos',
      company: 'Empresa',
      newsletter: 'Boletín',
      newsletterText: 'Suscríbete para recibir actualizaciones y ofertas especiales',
      emailPlaceholder: 'Tu correo electrónico',
      subscribe: 'Suscribirse',
      copyright: '© 2025 Cloud Nine Baby. Todos los derechos reservados. Hecho a mano en Perú con ❤️',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      shop: 'Boutique',
      collections: 'Collections',
      blog: 'Blog',
      about: 'À Propos',
      contact: 'Contact',
      cart: 'Panier',
    },
    hero: {
      title: 'Cloud Nine Baby',
      subtitle: 'Une collection pour vous faire sentir comme un bébé',
      shopNow: 'Acheter Maintenant',
      viewCollections: 'Voir les Collections',
    },
    features: {
      authentic: {
        title: 'Authentique',
        description: 'Vêtements pour bébé 100% authentiques faits à la main du Pérou',
      },
      quality: {
        title: 'Qualité Premium',
        description: 'Tissus doux et confortables sans danger pour la peau de votre bébé',
      },
      shipping: {
        title: 'Livraison Rapide',
        description: 'Livraison rapide et sécurisée à votre porte',
      },
    },
    products: {
      title: 'Produits Vedettes',
      subtitle: 'Découvrez nos vêtements pour bébé les plus aimés',
      viewAll: 'Voir Tous les Produits',
      addToCart: 'Ajouter au Panier',
      items: {
        sweater: 'Pull pour Bébé en Alpaga',
        hat: 'Bonnet Traditionnel Péruvien',
        blanket: 'Couverture pour Bébé Tissée à la Main',
      },
    },
    blog: {
      title: 'Coin Lecture',
      subtitle: 'Recommandations de livres et conseils parentaux',
      readMore: 'Lire Plus d\'Articles',
      articles: {
        books: {
          title: 'Meilleurs Livres pour Nouveaux Parents',
          excerpt: 'Découvrez des lectures essentielles pour votre parcours parental...',
        },
        lullabies: {
          title: 'Berceuses Péruviennes Traditionnelles',
          excerpt: 'Chansons apaisantes transmises de génération en génération...',
        },
        tips: {
          title: 'Conseils et Astuces pour Prendre Soin de Bébé',
          excerpt: 'Conseils d\'experts pour prendre soin de votre petit...',
        },
      },
    },
    footer: {
      description: 'Vêtements pour bébé péruviens authentiques fabriqués avec amour',
      shop: 'Boutique',
      allProducts: 'Tous les Produits',
      newArrivals: 'Nouveautés',
      company: 'Entreprise',
      newsletter: 'Newsletter',
      newsletterText: 'Abonnez-vous pour recevoir des mises à jour et des offres spéciales',
      emailPlaceholder: 'Votre email',
      subscribe: 'S\'abonner',
      copyright: '© 2025 Cloud Nine Baby. Tous droits réservés. Fabriqué à la main au Pérou avec ❤️',
    },
  },
};
