import type { Product, Operator, ProductCategory } from './types';

export const OPERATORS: Operator[] = ["MPT", "OOREDOO", "ATOM", "MYTEL"];
export const PRODUCT_CATEGORIES: ProductCategory[] = ["Data", "Minutes", "Points", "Packages", "Beautiful Numbers"];

export const products: Product[] = [
  // MPT Products
  {
    id: 'mpt-data-1',
    operator: 'MPT',
    category: 'Data',
    name: '1GB Data Pack',
    price: 999,
    description: 'Get 1GB of high-speed data for 30 days. Perfect for light browsing and social media.',
  },
  {
    id: 'mpt-minutes-1',
    operator: 'MPT',
    category: 'Minutes',
    name: '100 MPT-MPT Minutes',
    price: 500,
    description: '100 minutes for calls to other MPT numbers, valid for 7 days.',
  },
    {
    id: 'mpt-package-1',
    operator: 'MPT',
    category: 'Packages',
    name: 'Social Pack',
    price: 1500,
    description: 'Unlimited access to Facebook, Instagram, and WhatsApp for 30 days.',
  },

  // OOREDOO Products
  {
    id: 'ooredoo-data-1',
    operator: 'OOREDOO',
    category: 'Data',
    name: 'Ooredoo 2.5GB',
    price: 2499,
    description: 'Enjoy 2.5GB of fast 4G+ data, valid for 30 days. Stream and browse without limits.',
  },
  {
    id: 'ooredoo-beautiful-1',
    operator: 'OOREDOO',
    category: 'Beautiful Numbers',
    name: 'Golden Number 777',
    price: 50000,
    description: 'A unique and memorable phone number ending in 777. Stand out from the crowd.',
  },
    {
    id: 'ooredoo-points-1',
    operator: 'OOREDOO',
    category: 'Points',
    name: '100 VIP Points',
    price: 1000,
    description: 'Redeemable for exclusive rewards and discounts in the Ooredoo app.',
  },

  // ATOM Products
  {
    id: 'atom-data-1',
    operator: 'ATOM',
    category: 'Data',
    name: 'ATOM Giga Pack',
    price: 5000,
    description: 'A massive 10GB data pack for heavy users. Valid for 30 days of uninterrupted connectivity.',
  },
  {
    id: 'atom-minutes-1',
    operator: 'ATOM',
    category: 'Minutes',
    name: 'All-Net 200 Mins',
    price: 1999,
    description: '200 minutes to call any network in the country. Stay connected with everyone.',
  },
    {
    id: 'atom-package-1',
    operator: 'ATOM',
    category: 'Packages',
    name: 'Gaming Pack Pro',
    price: 2999,
    description: 'Low-latency data specifically for online gaming. Dominate the competition.',
  },

  // MYTEL Products
  {
    id: 'mytel-data-1',
    operator: 'MYTEL',
    category: 'Data',
    name: 'MyTel Unlimited Data',
    price: 9999,
    description: 'Truly unlimited data for one month. The ultimate data plan for power users.',
  },
  {
    id: 'mytel-beautiful-1',
    operator: 'MYTEL',
    category: 'Beautiful Numbers',
    name: 'VIP Number 8888',
    price: 100000,
    description: 'An exclusive VIP number that exudes prestige. The ultimate status symbol.',
  },
  {
    id: 'mytel-package-1',
    operator: 'MYTEL',
    category: 'Packages',
    name: 'Student Pack',
    price: 999,
    description: '5GB data + 100 all-net minutes, specially for students. Valid for 30 days.',
  },
];
