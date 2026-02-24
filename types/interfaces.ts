export interface ISearchCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ISearchSuggestion {
  title: string;
  count: number;
}

export interface IMenuSection {
  title: string;
  links: string[];
}

export type IMenuData = Record<string, IMenuSection[]>;

export type MenuKey = keyof IMenuData;

export interface IProduct {
  id: number;
  name: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
  rating: number;
  reviews: number;
  price: number;
  onSale?: boolean;
  discount?: number;
  isNew?: boolean;
}

export type INewArrival = IProduct;
export type IBigSale = IProduct;
export type IBestSeller = IProduct;
export type IBestChoice = IProduct;

export interface INavbar {
  logo: {
    src: string;
    alt: string;
  };
  navLinks: { label: string; href: string; }[];
  searchPlaceholder: string;
  userAccount: {
    label: string;
    icon: string;
  };
  shoppingCart: {
    label: string;
    icon: string;
  };
}

export interface IHero {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: {
    label: string;
    href: string;
  };
  video: {
    src: string;
    type: string;
  };
}

export interface IBrand {
    name: string;
    logo: string;
}

export interface IFooter {
  logo: {
    src: string;
    alt: string;
  };
  companyLinks: { label: string; href: string; }[];
  helpLinks: { label:string; href: string; }[];
  legalLinks: { label: string; href: string; }[];
  socialMedia: {
    name: string;
    icon: string;
    href: string;
  }[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonLabel: string;
  };
}
