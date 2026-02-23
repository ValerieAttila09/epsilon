import { IMenuData, IHero, IProduct, IBrand } from '@/types/interfaces';

export const heroData: IHero = {
    title: "FIND YOUR FLOW",
    subtitle: "Step into greatness. Our latest collection is engineered to elevate your every move. Discover the perfect pair to match your ambition.",
    button: {
        href: "#",
        label: "Shop Now"
    },
    image: {
        src: "https://placehold.co/1920x1080/4D4538/FFFFFF/png?text=KANJI",
        alt: "A person tying their shoelaces"
    }
}

export const menuData: IMenuData = {
  "New": [
    {
      title: "New & Trending",
      links: ["New Arrivals", "New Offer", "Best Sellers", "Latest Drops", "New in Air Max", "Shop Latest Sale Styles"],
    },
  ],
  "Men": [
    {
      title: "New & Trending",
      links: ["New Arrivals", "New Offer", "Best Sellers", "Latest Drops", "New in Air Max"],
    },
    {
      title: "Shoes",
      links: ["Basketball", "Lifestyle", "Jordan", "Retro Running", "Running", "Training & Gym", "Sandals & Slides", "Shoes $100 & Under"],
    },
    {
      title: "Clothing",
      links: ["Hoodies & Sweatshirts", "Jordan", "Jackets & Vests", "Tracksuits", "24/7 Collection", "Pants", "Shorts", "Tops & T-Shirts"],
    },
  ],
  "Women": [
    {
      title: "New & Trending",
      links: ["New Arrivals", "Best Sellers", "Latest Drops"],
    },
    {
      title: "Shoes",
      links: ["Lifestyle", "Running", "Training & Gym", "Sandals & Slides"],
    },
    {
      title: "Clothing",
      links: ["Hoodies & Sweatshirts", "Jackets & Vests", "Pants", "Shorts", "Tops & T-Shirts", "Sports Bras"],
    },
  ],
  "Kids": [
    {
      title: "Featured",
      links: ["New Arrivals", "Newest Sneakers", "Easy On & Off"],
    },
    {
      title: "Boys",
      links: ["Shoes", "Clothing", "Accessories"],
    },
    {
      title: "Girls",
      links: ["Shoes", "Clothing", "Accessories"],
    },
  ],
  "Sports": [
    {
      title: "Accessories",
      links: ["Bags & Backpacks", "Hats & Headwear", "Socks", "Sunglasses", "Belts"],
    },
    {
      title: "Shop By Sport",
      links: ["Baseball", "Basketball", "Cycling", "Football", "Golf", "Hiking", "Outdoor", "Running", "Soccer", "Tennis", "Workout & Gym", "Yoga"],
    },
    {
      title: "Shop By Color",
      links: ["Elemental Pink", "University Red", "Electric Blue", "Mink Brown", "Black And Sail"],
    },
  ],
};

export const bigSales: IProduct[] = [
  {
    id: 1,
    name: 'Classic Crewneck T-Shirt',
    category: 'T-Shirts',
    image: { src: 'https://placehold.co/400x400/F5F5F5/000000/png?text=Classic+Crewneck', alt: 'Classic Crewneck T-Shirt' },
    rating: 4.5,
    reviews: 120,
    price: 25.00,
    discount: 10,
    onSale: true,
  },
  {
    id: 2,
    name: 'Slim-Fit Chino Pants',
    category: 'Pants',
    image: { src: 'https://placehold.co/400x400/E5E5E5/000000/png?text=Slim-Fit+Chinos', alt: 'Slim-Fit Chino Pants' },
    rating: 4.2,
    reviews: 95,
    price: 45.00,
    discount: 15,
    onSale: true,
  },
  {
    id: 9,
    name: 'Bomber Jacket',
    category: 'Jackets',
    image: { src: 'https://placehold.co/400x400/D0D0D0/000000/png?text=Bomber+Jacket', alt: 'Bomber Jacket' },
    rating: 4.6,
    reviews: 150,
    price: 85.00,
    discount: 20,
    onSale: true,
  },
  {
    id: 10,
    name: 'Graphic Hoodie',
    category: 'Hoodies',
    image: { src: 'https://placehold.co/400x400/C0C0C0/000000/png?text=Graphic+Hoodie', alt: 'Graphic Hoodie' },
    rating: 4.4,
    reviews: 130,
    price: 60.00,
    discount: 10,
    onSale: true,
  },
];

export const bestSellers: IProduct[] = [
    {
        id: 3,
        name: 'V-Neck Sweater',
        category: 'Sweaters',
        image: { src: 'https://placehold.co/400x400/D5D5D5/000000/png?text=V-Neck+Sweater', alt: 'V-Neck Sweater' },
        rating: 4.8,
        reviews: 210,
        price: 55.00,
    },
    {
        id: 4,
        name: 'Denim Jacket',
        category: 'Jackets',
        image: { src: 'https://placehold.co/400x400/C5C5C5/000000/png?text=Denim+Jacket', alt: 'Denim Jacket' },
        rating: 4.7,
        reviews: 180,
        price: 75.00,
    },
    {
        id: 11,
        name: 'Pleated Midi Skirt',
        category: 'Skirts',
        image: { src: 'https://placehold.co/400x400/B0B0B0/000000/png?text=Midi+Skirt', alt: 'Pleated Midi Skirt' },
        rating: 4.9,
        reviews: 250,
        price: 65.00,
    },
    {
        id: 12,
        name: 'Wool Peacoat',
        category: 'Coats',
        image: { src: 'https://placehold.co/400x400/A0A0A0/000000/png?text=Wool+Peacoat', alt: 'Wool Peacoat' },
        rating: 4.8,
        reviews: 220,
        price: 120.00,
    },
];

export const bestChoices: IProduct[] = [
    {
        id: 5,
        name: 'Leather Biker Jacket',
        category: 'Jackets',
        image: { src: 'https://placehold.co/400x400/B5B5B5/000000/png?text=Biker+Jacket', alt: 'Leather Biker Jacket' },
        rating: 4.9,
        reviews: 320,
        price: 150.00,
    },
    {
        id: 6,
        name: 'Cashmere Scarf',
        category: 'Accessories',
        image: { src: 'https://placehold.co/400x400/A5A5A5/000000/png?text=Cashmere+Scarf', alt: 'Cashmere Scarf' },
        rating: 4.8,
        reviews: 150,
        price: 65.00,
    },
    {
        id: 13,
        name: 'Silk Blouse',
        category: 'Blouses',
        image: { src: 'https://placehold.co/400x400/909090/000000/png?text=Silk+Blouse', alt: 'Silk Blouse' },
        rating: 4.9,
        reviews: 180,
        price: 70.00,
    },
    {
        id: 14,
        name: 'Trench Coat',
        category: 'Coats',
        image: { src: 'https://placehold.co/400x400/808080/000000/png?text=Trench+Coat', alt: 'Trench Coat' },
        rating: 4.7,
        reviews: 200,
        price: 140.00,
    },
];

export const newArrivals: IProduct[] = [
    {
        id: 7,
        name: 'Linen Button-Down Shirt',
        category: 'Shirts',
        image: { src: 'https://placehold.co/400x400/959595/000000/png?text=Linen+Shirt', alt: 'Linen Button-Down Shirt' },
        rating: 4.6,
        reviews: 80,
        price: 38.00,
        isNew: true,
    },
    {
        id: 8,
        name: 'High-Waisted Skinny Jeans',
        category: 'Jeans',
        image: { src: 'https://placehold.co/400x400/858585/000000/png?text=Skinny+Jeans', alt: 'High-Waisted Skinny Jeans' },
        rating: 4.4,
        reviews: 110,
        price: 60.00,
        isNew: true,
    },
    {
        id: 15,
        name: 'Cropped Cardigan',
        category: 'Cardigans',
        image: { src: 'https://placehold.co/400x400/707070/000000/png?text=Cropped+Cardigan', alt: 'Cropped Cardigan' },
        rating: 4.5,
        reviews: 90,
        price: 50.00,
        isNew: true,
    },
    {
        id: 16,
        name: 'Wide-Leg Trousers',
        category: 'Trousers',
        image: { src: 'https://placehold.co/400x400/606060/000000/png?text=Wide-Leg+Trousers', alt: 'Wide-Leg Trousers' },
        rating: 4.7,
        reviews: 140,
        price: 55.00,
        isNew: true,
    },
];

export const brands: IBrand[] = [
  { name: 'Nike', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Nike' },
  { name: 'Adidas', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Adidas' },
  { name: 'Puma', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Puma' },
  { name: 'Reebok', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Reebok' },
  { name: 'Levi\'s', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Levi\'s' },
  { name: 'Zara', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Zara' },
  { name: 'H&M', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=H&M' },
  { name: 'Gucci', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Gucci' },
  { name: 'Prada', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Prada' },
  { name: 'Versace', logo: 'https://placehold.co/150x50/cccccc/000000/png?text=Versace' },
];
