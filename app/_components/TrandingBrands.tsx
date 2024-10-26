import React from "react";
import { ProductCard } from "./TrendingProducts";



type Size = "S" | "M" | "L" | "XL";


interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  sizes: Size[]; 
}



const FeaturedProducts = () => {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299,
      oldPrice: 399,
      image: "/images/categories/headset.jpg",
      category: "Electronics",
      isNew: true,
      sizes: ["M", "L"], 
    },
    {
      id: 2,
      name: "Organic Food Package",
      price: 49,
      oldPrice: 59,
      image: "/images/categories/food.avif",
      category: "Food",
      sizes: ["S", "M", "L"], 
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 199,
      oldPrice: 249,
      image: "/images/categories/elec.jpg",
      category: "Electronics",
      isNew: true,
      sizes: ["M"], 
    },
    {
      id: 4,
      name: "Summer Collection",
      price: 89,
      oldPrice: 119,
      image: "/images/categories/fashions.jpg",
      category: "Fashion",
      sizes: ["S", "M", "L", "XL"], 
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Featured Products
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredProducts.slice(0, 2).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-6">
              <img
                src="/images/categories/smallBanner.webp"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">

            <div>
              <img
                src="/images/categories/phones.webp"
                alt=""
                className="w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {featuredProducts.slice(2, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/categories/featured.webp"
                alt="Featured"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
