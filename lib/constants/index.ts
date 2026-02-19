import { IMenuData, IHero } from '@/types/interfaces';

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

export * from './newsData';
export * from './eventsData';
