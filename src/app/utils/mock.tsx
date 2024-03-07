import { Product } from "./types";
export const products: Product[] = [
  {
    id:1,
    title: "Backpack",
    image: ["backpack","hoodie"],
    price: 30,
    description: "Spacious and durable backpack for all your essentials.",
    category: "jewlery",
    slug: "bag",
    discount:10,
    size:['M','S','X','L','Xl','XXl'],
    color:['red', 'blue','black'],
    qty:1

  },
  {
    id:2,
    title: "tshirt",
    image: ["tee","sneakers"],
    price: 70,
    description: "Spacious and durable backpack for all your essentials.",
    category: "tops",
    slug: "tshirt",
    discount:20,
    size:['M','S','X','L','Xl','XXl'],
    color:['red', 'blue','black'],
    qty:1

  },
  {
    id: 3,
    title: "Running Shoes",
    image: ["shoes", "sports"],
    price: 100,
    description: "Comfortable and lightweight running shoes for your active lifestyle.",
    category: "shoes",
    slug: "running-shoes",
    discount: 15,
    size: ['M', 'L', 'XL'],
    color: ['white', 'gray', 'blue'],
    qty: 1
  },
  {
    id: 4,
    title: "Denim Jeans",
    image: ["jeans", "casual"],
    price: 50,
    description: "Classic denim jeans for a stylish and casual look.",
    category: "pants",
    slug: "denim-jeans",
    discount: 10,
    size: ['30', '32', '34', '36'],
    color: ['blue', 'black'],
    qty: 1
  },
  {
    id: 5,
    title: "Smartwatch",
    image: ["watch", "gadget"],
    price: 120,
    description: "Stay connected and track your fitness with this sleek smartwatch.",
    category: "jewlery",
    slug: "smartwatch",
    discount: 5,
    size: ['one-size'],
    color: ['black', 'silver'],
    qty: 1
  },
  {
    id: 6,
    title: "Sunglasses",
    image: ["sunglasses", "accessories"],
    price: 25,
    description: "Protect your eyes in style with these fashionable sunglasses.",
    category: "jewlery",
    slug: "sunglasses",
    discount: 20,
    size: ['one-size'],
    color: ['brown', 'black'],
    qty: 1
  },
  {
    id: 7,
    title: "Winter Jacket",
    image: ["jacket", "winter"],
    price: 80,
    description: "Stay warm and stylish in this cozy winter jacket.",
    category: "tops",
    slug: "winter-jacket",
    discount: 12,
    size: ['S', 'M', 'L', 'XL'],
    color: ['navy', 'green'],
    qty: 1
  },
];
