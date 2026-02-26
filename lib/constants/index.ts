// BRAND ICONS
import nikeIcon from '../../assets/icons/nike.svg'
import adidasIcon from '../../assets/icons/adidas.svg'
import pumaIcon from '../../assets/icons/puma.svg'
import reebokIcon from '../../assets/icons/reebok.svg'
import levisIcon from '../../assets/icons/levis.svg'
import zaraIcon from '../../assets/icons/zara.svg'
import hAndMIcon from '../../assets/icons/h&m.svg'
import gucciIcon from '../../assets/icons/gucci.svg'
import balenciagaIcon from '../../assets/icons/balenciaga.svg'
import calvinKleinIcon from '../../assets/icons/calvin-klein.svg'
import converseIcon from '../../assets/icons/converse.svg'
import zimmermannIcon from '../../assets/icons/zimmermann.svg'

// PRODUCT IMAGES
import AviatorSunglassesImage from "../../assets/images/aviator-sunglasses-kanji.jpg";
import CargoShortImage from "../../assets/images/cargo-shorts-kanji.png";
import ClassicWhiteTeeImage from "../../assets/images/classic-white-tee-kanji.png";
import DistressedJeansImage from "../../assets/images/distressed-jeans-kanji.png";
import GraphicHoodieImage from "../../assets/images/graphic-hoodie-kanji.png";
import LeatherBeltImage from "../../assets/images/leather-belt-kanji.png";
import LeatherJacketImage from "../../assets/images/leather-jacket-kanji.png";
import LinenShirtImage from "../../assets/images/linen-shirt-kanji.png";
import OversizedTShirtImage from "../../assets/images/oversized-t-shirt-kanji.png";
import SlimFitChinosImage from "../../assets/images/slim-fit-chinos.png";
import SummerDressImage from "../../assets/images/summer-dress-kanji.png";
import UrbanBackpackImage from "../../assets/images/urban-backpack-kanji.png";
import WoolPeacotImage from "../../assets/images/wool-peacot-kanji.png";
import ChanelFallImage2024 from "../../assets/images/chanel-fall-winter-2024-kanji.png";
import ChanelFallImage2025 from "../../assets/images/chanel-fall-winter-2025-kanji.png";

import { IBestChoice, IBestSeller, IBigSale, IBrand, IFooter, IHero, INavbar, INewArrival, IMenuData } from "@/types/interfaces";

export const navbarData: INavbar = {
  logo: {
    src: "assets/icons/Logo Alternative.svg",
    alt: "Fashio.",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Kids", href: "/kids" },
  ],
  searchPlaceholder: "Search...",
  userAccount: {
    label: "My Account",
    icon: "https://placehold.co/24x24/C0C0C0/000000/png?text=User",
  },
  shoppingCart: {
    label: "My Cart",
    icon: "https://placehold.co/24x24/C0C0C0/000000/png?text=Cart",
  },
};

export const menuData: IMenuData = {
  Men: [
    { title: 'Clothing', links: ['T-Shirts', 'Jeans', 'Shirts', 'Shorts'] },
    { title: 'Shoes', links: ['Sneakers', 'Boots', 'Sandals'] },
    { title: 'Accessories', links: ['Hats', 'Belts', 'Sunglasses'] },
  ],
  Women: [
    { title: 'Clothing', links: ['Dresses', 'Tops', 'Skirts', 'Pants'] },
    { title: 'Shoes', links: ['Heels', 'Flats', 'Boots'] },
    { title: 'Accessories', links: ['Handbags', 'Jewelry', 'Scarves'] },
  ],
  Kids: [
    { title: 'Boys', links: ['T-Shirts', 'Shorts', 'Sneakers'] },
    { title: 'Girls', links: ['Dresses', 'Tops', 'Sandals'] },
  ],
};

export const heroData: IHero = {
  title: "FASHIO.",
  subtitle: "Your Style, Your Story",
  description:
    "Discover the latest trends and express your unique style with our curated collection of clothing and accessories. At Fashio, we believe that fashion is more than just what you wear—it's a way to tell your story. Whether you're looking for everyday essentials or statement pieces for a special occasion, we have something for everyone.",
  ctaButton: {
    label: "Shop Now",
    href: "/products",
  },
  video: {
    src: "assets/videos/UQ_CMS_video_jp_2026_HOME_GL_Aseets_PJ_CPJ_Mainlaunch_SP_MEN.mp4",
    type: "video/mp4",
  },
};

export const newArrivalsData: INewArrival[] = [
  {
    id: 1,
    name: 'Oversized Tee',
    category: 'T-Shirts',
    image: { src: OversizedTShirtImage, alt: 'Oversized Tee' },
    rating: 4.5,
    reviews: 150,
    price: 25.00,
    onSale: false,
  },
  {
    id: 2,
    name: 'Distressed Jeans',
    category: 'Jeans',
    image: { src: DistressedJeansImage, alt: 'Distressed Jeans' },
    rating: 4.7,
    reviews: 200,
    price: 75.00,
    onSale: false,
  },
  {
    id: 3,
    name: 'Linen Shirt',
    category: 'Shirts',
    image: { src: LinenShirtImage, alt: 'Linen Shirt' },
    rating: 4.6,
    reviews: 180,
    price: 45.00,
    onSale: true,
    discount: 10,
  },
  {
    id: 4,
    name: 'Cargo Shorts',
    category: 'Shorts',
    image: { src: CargoShortImage, alt: 'Cargo Shorts' },
    rating: 4.4,
    reviews: 120,
    price: 40.00,
    onSale: false,
  },
];

export const bigSales: IBigSale[] = [
  {
    id: 1,
    name: 'Summer Dress',
    category: 'Dresses',
    image: { src: SummerDressImage, alt: 'Summer Dress' },
    rating: 4.8,
    reviews: 300,
    price: 50.00,
    discount: 50,
    onSale: true,
  },
  {
    id: 2,
    name: 'Leather Jacket',
    category: 'Jackets',
    image: { src: LeatherJacketImage, alt: 'Leather Jacket' },
    rating: 4.9,
    reviews: 400,
    price: 150.00,
    discount: 40,
    onSale: true,
  },
  {
    id: 3,
    name: 'Graphic Hoodie',
    category: 'Hoodies',
    image: { src: GraphicHoodieImage, alt: 'Graphic Hoodie' },
    rating: 4.4,
    reviews: 130,
    price: 60.00,
    discount: 10,
    onSale: true,
  },
  {
    id: 4,
    name: 'Chanel Fall-Winter 2024/25',
    category: 'Coats',
    image: { src: ChanelFallImage2024, alt: 'Chanel Fall-Winter 2024/25' },
    rating: 5.0,
    reviews: 777,
    price: 240.00,
    discount: 25,
    onSale: true,
  }
];

export const bestSellers: IBestSeller[] = [
  {
    id: 1,
    name: 'Classic White Tee',
    category: 'T-Shirts',
    image: { src: ClassicWhiteTeeImage, alt: 'Classic White Tee' },
    rating: 4.9,
    reviews: 500,
    price: 20.00,
  },
  {
    id: 2,
    name: 'Slim Fit Chinos',
    category: 'Pants',
    image: { src: SlimFitChinosImage, alt: 'Slim Fit Chinos' },
    rating: 4.8,
    reviews: 450,
    price: 55.00,
  },
  {
    id: 3,
    name: 'Wool Peacoat',
    category: 'Coats',
    image: { src: WoolPeacotImage, alt: 'Wool Peacoat' },
    rating: 4.8,
    reviews: 220,
    price: 120.00,
  },
  {
    id: 4,
    name: 'Chanel Fall-Winter 2024/25',
    category: 'Coats',
    image: { src: ChanelFallImage2024, alt: 'Chanel Fall-Winter 2024/25' },
    rating: 5.0,
    reviews: 777,
    price: 240.00,
  }
];

export const bestChoices: IBestChoice[] = [
  {
    id: 1,
    name: 'Urban Backpack',
    category: 'Accessories',
    image: { src: UrbanBackpackImage, alt: 'Urban Backpack' },
    rating: 4.7,
    reviews: 250,
    price: 65.00,
  },
  {
    id: 2,
    name: 'Aviator Sunglasses',
    category: 'Accessories',
    image: { src: AviatorSunglassesImage, alt: 'Aviator Sunglasses' },
    rating: 4.9,
    reviews: 350,
    price: 35.00,
  },
  {
    id: 3,
    name: 'Leather Belt',
    category: 'Accessories',
    image: { src: LeatherBeltImage, alt: 'Leather Belt' },
    rating: 4.8,
    reviews: 300,
    price: 30.00,
  },
  {
    id: 4,
    name: 'Chanel Fall-Winter 25/26',
    category: 'Coats',
    image: { src: ChanelFallImage2025, alt: 'Chanel Fall-Winter 25/26' },
    rating: 5.0,
    reviews: 458,
    price: 285.00,
  }
];

export const footerData: IFooter = {
  logo: {
    src: "assets/images/kanji-lable-footer.v2.svg",
    alt: "Fashio.",
  },
  companyLinks: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  helpLinks: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  socialMedia: [
    {
      name: "Facebook",
      icon: "https://placehold.co/24x24/3B5998/FFFFFF/png?text=F",
      href: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: "https://placehold.co/24x24/1DA1F2/FFFFFF/png?text=T",
      href: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: "https://placehold.co/24x24/E4405F/FFFFFF/png?text=I",
      href: "https://instagram.com",
    },
  ],
  newsletter: {
    title: "Subscribe to our newsletter",
    description: "Get the latest updates on new arrivals and special offers.",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
};

export const brands: IBrand[] = [
  { name: 'Nike', logo: nikeIcon },
  { name: 'Adidas', logo: adidasIcon },
  { name: 'Puma', logo: pumaIcon },
  { name: 'Reebok', logo: reebokIcon },
  { name: 'Levi\'s', logo: levisIcon },
  { name: 'Zara', logo: zaraIcon },
  { name: 'H&M', logo: hAndMIcon },
  { name: 'Gucci', logo: gucciIcon },
  { name: 'Balenciaga', logo: balenciagaIcon },
  { name: 'Calvin Klein', logo: calvinKleinIcon },
  { name: 'Converse', logo: converseIcon },
  { name: 'Zimmermann', logo: zimmermannIcon },
];