import { GalleryVerticalEnd } from 'lucide-react';

export const data = {
  appName: 'Next.js Shadcn Dashboard',
  appDescription: 'Basic dashboard with Next.js and Shadcn',
  logo: GalleryVerticalEnd,
};

// this a dummy type, replace it with your own data types
export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

// this a dummy type, replace it with your own data types
export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};
