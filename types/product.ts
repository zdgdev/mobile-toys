export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  imageUrl: string;
  images?: string[];
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  imageUrl: string;
}

export interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  link?: string;
}