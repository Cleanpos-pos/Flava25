
import { MenuItem, BusinessInfo } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // SIGNATURE DONER & KEBABS
  {
    id: 'dk1',
    name: 'Loaded Doner Naan',
    description: 'Flame-grilled doner (Lamb, Chicken, or Mixed) on freshly baked naan with onions, lettuce, cucumber, tomatoes, red cabbage, jalapeños, garlic, and chilli sauce.',
    price: '£8.50',
    category: 'kebabs-wraps',
    subcategory: 'Signature Doner',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop',
    badge: 'Highly Recommended'
  },
  {
    id: 'dk2',
    name: 'Classic Doner Feast',
    description: 'Thinly sliced lamb or chicken doner with fresh salad and sauces wrapped in toasted bread.',
    price: '£6.50',
    category: 'kebabs-wraps',
    subcategory: 'Signature Doner',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dk3',
    name: 'Doner & Chips',
    description: 'Choice of doner meat served over chips with salad and sauces.',
    price: '£6.50',
    prices: [{ label: 'Standard', price: '£6.50' }, { label: 'Large', price: '£6.95' }],
    category: 'kebabs-wraps',
    subcategory: 'Signature Doner',
    image: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec30?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dk4',
    name: 'Flava Box',
    description: 'Doner meat combined with chicken tikka, seekh kebab pieces, and wings over chips or rice.',
    price: '£8.50',
    category: 'kebabs-wraps',
    subcategory: 'Signature Doner',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    badge: 'Popular Choice'
  },

  // GRILL SPECIALS
  {
    id: 'gs1',
    name: 'Chicken Tikka Box',
    description: 'Boneless chicken marinated in yoghurt and spices. Served with naan or rice, salad, and chutneys.',
    price: '£8.95',
    category: 'grill-specials',
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gs2',
    name: 'Seekh Kebab Box',
    description: 'Spicy minced chicken seekh kebabs grilled over flames.',
    price: '£6.50',
    category: 'grill-specials',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gs3',
    name: 'Tikka & Seekh Combo',
    description: 'Half portion of chicken tikka and 1 seekh kebab with naan/rice and mint chutney.',
    price: '£8.95',
    category: 'grill-specials',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop',
    badge: 'Grill Master'
  },

  // GOURMET BURGERS
  {
    id: 'gb1',
    name: 'Classic Beef Smashburger',
    description: 'Smashed beef patties, melted cheddar, house sauce, gherkins, and onions.',
    price: '£6.50',
    category: 'burgers',
    subcategory: 'Gourmet Beef',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gb2',
    name: "Babloo’s Giant Chicken Fillet",
    description: 'Buttermilk marinated chicken breast, cheese, spicy mayo, and salad.',
    price: '£6.50',
    category: 'burgers',
    subcategory: 'Gourmet Chicken',
    image: 'https://images.unsplash.com/photo-1626700051175-656fc7ec33be?q=80&w=800&auto=format&fit=crop',
    badge: 'Giant Size'
  },
  {
    id: 'gb3',
    name: 'The Gourmet Burger',
    description: 'Premium thick beef patty, cheese sauce, lettuce, tomato, onion rings, and house special sauce.',
    price: '£7.50',
    category: 'burgers',
    subcategory: 'Gourmet Beef',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    badge: 'Premium'
  },
  {
    id: 'gb4',
    name: 'Doner Deluxe Burger',
    description: 'Choice of doner meat, garlic, chilli sauce, and onion rings.',
    price: '£4.95',
    category: 'burgers',
    subcategory: 'Fusion Burgers',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gb5',
    name: 'Fish Burger',
    description: 'Golden fish fillet, lettuce, tartar sauce, and lemon.',
    price: '£6.50',
    category: 'burgers',
    subcategory: 'Seafood',
    image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gb6',
    name: 'Veggie Royale',
    description: 'Spiced vegetable and potato patty, cheese, mint yoghurt, and tamarind glaze.',
    price: '£4.95',
    category: 'burgers',
    subcategory: 'Veggie',
    image: 'https://images.unsplash.com/photo-1585238341267-1cfec2046a55?q=80&w=800&auto=format&fit=crop'
  },

  // PIZZAS
  {
    id: 'pz1',
    name: 'Margherita',
    description: 'Tomato base, mozzarella, and fresh herbs.',
    price: '£7.50',
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pz2',
    name: 'Pepperoni Passion',
    description: 'Double pepperoni and mozzarella.',
    price: '£8.95',
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pz3',
    name: 'BBQ Chicken',
    description: 'Grilled chicken, smoky BBQ sauce, red onions, and sweetcorn.',
    price: '£8.95',
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pz4',
    name: 'Veggie Delight',
    description: 'Mushrooms, peppers, red onions, sweetcorn, and olives.',
    price: '£8.95',
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1511688855357-1050ae147171?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pz5',
    name: 'Meat Feast',
    description: 'Meatballs, pepperoni, chicken, and mozzarella.',
    price: '£8.95',
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pz6',
    name: 'Chicken Tikka Pizza',
    description: 'Spiced chicken tikka, green peppers, and mint drizzle.',
    price: '£8.95',
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pz7',
    name: 'The Masala Feast',
    description: 'Masala spiced cheese, green chillies, chicken tikka, seekh, and doner.',
    price: '£9.95',
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop',
    badge: 'Signature Pizza'
  },

  // FISH & CHIPS / SIDES
  {
    id: 'fc1',
    name: 'Traditional Cod / White Fish',
    description: 'Crispy battered fish available as Fish & Chips.',
    price: '£7.50',
    category: 'fish-chips',
    subcategory: 'Traditional',
    image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fc2',
    name: 'Masala Fish',
    description: 'Spiced marinated fish grilled to perfection.',
    price: '£8.50',
    category: 'fish-chips',
    subcategory: 'Signature',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fc3',
    name: 'Classic Steak Pie',
    description: 'Warm and comforting traditional steak pie.',
    price: '£4.50',
    category: 'fish-chips',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1604135398251-17f16a127a6c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'fc4',
    name: 'Loaded Chips',
    description: 'Garnished with chicken, lamb, grilled vegetables, and special cheese sauce.',
    price: '£5.50',
    category: 'fish-chips',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1714651620426-1ae32ca6b418?q=80&w=800&auto=format&fit=crop',
    badge: 'Popular Side'
  },

  // BITES & WINGS
  {
    id: 'bw1',
    name: 'Bites Box',
    description: 'A selection of our crispy southern fried bites.',
    price: '£5.99',
    category: 'chicken-sides',
    subcategory: 'Bites & Wings',
    image: 'https://images.unsplash.com/photo-1567622646635-b7c83b85a249?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bw2',
    name: 'Southern Fried Chicken',
    description: 'Crispy, golden southern fried chicken pieces.',
    price: '£6.49',
    category: 'chicken-sides',
    subcategory: 'Bites & Wings',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bw3',
    name: 'Flava Wings',
    description: '6 Pieces of our signature flame-grilled or fried wings.',
    price: '£4.99',
    category: 'chicken-sides',
    subcategory: 'Bites & Wings',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop'
  }
];

export const SPECIAL_OFFERS = [
  {
    title: "1st Visit Special",
    description: "New to Flava25? Get 20% OFF your first dine-in dinner!",
    price: "20% OFF",
    tag: "1st Visit"
  },
  {
    title: "2nd Visit Special",
    description: "Welcome back! Enjoy 15% OFF your second dine-in dinner.",
    price: "15% OFF",
    tag: "2nd Visit"
  },
  {
    title: "3rd Visit Special",
    description: "A loyal customer! Get 10% OFF your third dine-in dinner.",
    price: "10% OFF",
    tag: "3rd Visit"
  }
];

export const BUSINESS_INFO: BusinessInfo = {
  name: "Flava25",
  address: "175 Halesowen Rd, Old Hill, Cradley Heath B64 6HE, United Kingdom",
  phone: "+44 1384 560831",
  note: "Open: 12AM-12PM (T&Cs Apply). Table Service £1.95.",
  openingHours: {
    "Mon - Thu": "12:00 PM – 12:00 AM",
    "Fri - Sat": "12:00 PM – 02:00 AM",
    "Sun": "12:00 PM – 12:00 AM"
  }
};
