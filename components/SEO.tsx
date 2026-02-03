
import React from 'react';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants';

const SEO: React.FC = () => {
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));

  const menuSections = categories.map(cat => ({
    "@type": "MenuSection",
    "name": cat.charAt(0).toUpperCase() + cat.slice(1) + 's',
    "hasMenuItem": MENU_ITEMS.filter(item => item.category === cat).map(item => ({
      "@type": "MenuItem",
      "name": item.name,
      "description": item.description,
      "offers": {
        "@type": "Offer",
        "price": item.price.replace('£', ''),
        "priceCurrency": "GBP"
      },
      "image": item.image
    }))
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "name": BUSINESS_INFO.name,
    "description": "Premium charcoal-grilled burgers and kebabs in Cradley Heath. Flava25 brings high energy and great taste to Old Hill.",
    "image": "https://picsum.photos/seed/burger-hero/1200/630",
    "@id": "https://flava25.co.uk",
    "url": "https://flava25.co.uk",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "££",
    "servesCuisine": ["Burgers", "Kebabs", "Middle Eastern", "Fast Food"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "175 Halesowen Rd, Old Hill",
      "addressLocality": "Cradley Heath",
      "addressRegion": "West Midlands",
      "postalCode": "B64 6HE",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4705,
      "longitude": -2.0628
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "12:00",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "12:00",
        "closes": "02:00"
      }
    ],
    "menu": {
      "@type": "Menu",
      "name": "Flava25 Main Menu",
      "hasMenuSection": menuSections
    },
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.restaurantlogin.com/api/fb/z5j_v4",
        "inLanguage": "en-GB",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEO;
