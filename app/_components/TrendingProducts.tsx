"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Sliders, X } from "lucide-react";

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

type Size = "S" | "M" | "L" | "XL";
type Category =
  | "All"
  | "Electronics"
  | "Food"
  | "Fashion"
  | "Home & Garden"
  | "Health & Beauty";

interface Filters {
  maxPrice: number;
  categories: Category[];
  sizes: Size[];
  onlyNew: boolean;
}

interface ProductCardProps {
  product: Product;
}

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-rose-500 text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
        </div>
        <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-gray-900/50 backdrop-blur-sm p-2 rounded-full hover:bg-rose-500 text-white transition-colors duration-300">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-400 mb-1">{product.category}</div>
        <h3 className="font-medium text-white mb-2 line-clamp-1">
          {product.name}
        </h3>
        <h3 className="font-medium text-white mb-2 line-clamp-1">
          Sizes: {product.sizes.join(", ")}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-rose-500">
              Rs.{product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                Rs.{product.oldPrice}
              </span>
            )}
          </div>
          <button className="bg-gray-700 p-2 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-colors duration-300">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  setFilters,
}) => {
  const categories: Category[] = [
    "All",
    "Electronics",
    "Food",
    "Fashion",
    "Home & Garden",
    "Health & Beauty",
  ];
  const sizes: Size[] = ["S", "M", "L", "XL"];

  useEffect(() => {
    if (filters.categories.length === 0) {
      setFilters((prev) => ({ ...prev, categories: ["All"] }));
    }
  }, [filters.categories.length, setFilters]);

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-1/4.6`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">Filters</h3>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="text-white mb-3">Price Range</h4>
          <input
            type="range"
            min="0"
            max="500"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
            }
            className="w-full accent-rose-500"
          />
          <div className="text-gray-400 mt-2">
            Max Price: Rs.{filters.maxPrice}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-white mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...filters.categories, category]
                      : filters.categories.filter((c) => c !== category);
                    setFilters({ ...filters, categories: newCategories });
                  }}
                  className="mr-2 accent-rose-500"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-white mb-3">Sizes</h4>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-1 rounded-full hover:bg-rose-300 transition-colors ${
                  filters.sizes.includes(size)
                    ? "bg-rose-500 text-white"
                    : "bg-gray-700 text-gray-400"
                }`}
                onClick={() => {
                  const newSizes = filters.sizes.includes(size)
                    ? filters.sizes.filter((s) => s !== size)
                    : [...filters.sizes, size];
                  setFilters({ ...filters, sizes: newSizes });
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-center text-gray-400">
            <input
              type="checkbox"
              checked={filters.onlyNew}
              onChange={(e) =>
                setFilters({ ...filters, onlyNew: e.target.checked })
              }
              className="mr-2"
            />
            Show only new items
          </label>
        </div>

        <button
          onClick={() =>
            setFilters({
              maxPrice: 500,
              categories: [],
              sizes: [],
              onlyNew: false,
            })
          }
          className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

const TrendingProducts: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({
    maxPrice: 500,
    categories: [],
    sizes: [],
    onlyNew: false,
  });

  const initialProducts: Product[] = [
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
    {
      id: 5,
      name: "Garden Tools Set",
      price: 149,
      image: "/images/categories/home.jpg",
      category: "Home & Garden",
      sizes: ["M", "L"],
    },
    {
      id: 6,
      name: "Beauty Care Kit",
      price: 79,
      oldPrice: 99,
      image: "/images/categories/heath.jpg",
      category: "Health & Beauty",
      sizes: ["S", "M"],
    },
  ];

  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialProducts);

  useEffect(() => {
    let filtered = initialProducts;

    filtered = filtered.filter((product) => product.price <= filters.maxPrice);

    if (filters.categories.length > 0 && !filters.categories.includes("All")) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category as Category)
      );
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    if (filters.onlyNew) {
      filtered = filtered.filter((product) => product.isNew);
    }

    setFilteredProducts(filtered);
  }, [filters]);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-rose-500 px-4 py-1.5 mb-4"
          >
            <span className="text-sm font-medium text-white">
              Popular Products
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Trending Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Discover our most popular products loved by customers worldwide
          </motion.p>
        </div>

        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center space-x-2 text-white bg-gray-800 px-4 py-2 rounded-lg"
          >
            <Sliders className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          <FilterSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            filters={filters}
            setFilters={setFilters}
          />

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No products match your selected filters. Try adjusting your
                criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export {TrendingProducts , ProductCard};
