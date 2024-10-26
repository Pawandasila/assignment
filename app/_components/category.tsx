"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

interface Category {
  name: string;
  Quantity: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-lg cursor-pointer group h-full"
    >
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          width={250}
          height={250}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/placeholder.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 p-3 sm:p-4 w-full">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-500 transition-colors duration-300">
          {category.name}
        </h3>
        <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-300">
          {category.Quantity} Items
        </p>
      </div>

      <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 transition-all duration-300 group-hover:ring-primary/50" />
    </motion.div>
  );
};

const Category = () => {
  const categories = [
    {
      name: "Electronics",
      Quantity: "234",
      image: "/images/categories/elec.jpg",
    },
    {
      name: "Food",
      Quantity: "156",
      image: "/images/categories/food.avif",
    },
    {
      name: "Headsets",
      Quantity: "98",
      image: "/images/categories/headset.jpg",
    },
    {
      name: "Fashions",
      Quantity: "178",
      image: "/images/categories/fashions.jpg",
    },
    {
      name: "Home and Gardens",
      Quantity: "145",
      image: "/images/categories/home.jpg",
    },
    {
      name: "Health and Beauty",
      Quantity: "112",
      image: "/images/categories/heath.jpg",
    },
    {
      name: "Toys and Games",
      Quantity: "112",
      image: "/images/categories/toys.jpg",
    },
    {
      name: "Books",
      Quantity: "112",
      image: "/images/categories/books.avif",
    },
    {
      name: "ps5",
      Quantity: "112",
      image: "/images/categories/ps5.jpg",
    },
    {
      name: "clothes",
      Quantity: "112",
      image: "/images/categories/clothes.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-rose-500 px-3 py-1 sm:px-4 sm:py-1.5 mb-3 sm:mb-4"
          >
            <span className="text-xs sm:text-sm font-medium text-white">
              Explore Categories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Browse by Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto"
          >
            Explore our wide range of products across different categories. Find
            exactly what you need with our organized collection.
          </motion.p>
        </div>

        {/* Categories Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className="categories-slider"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="h-full aspect-square">
                <CategoryCard category={category} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
