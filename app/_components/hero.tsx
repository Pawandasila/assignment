"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Hero = () => {
  const backgroundSlides = [
    {
      image:
        "https://i.pinimg.com/736x/b4/90/fb/b490fb4f41473bdd44b2dce317b8a0c0.jpg",
      alt: "Modern Luxury Home",
    },
    {
      image:
        "https://i.pinimg.com/736x/67/dd/5d/67dd5df5a121684609c1fb2589d314cf.jpg",
      alt: "Contemporary Apartment",
    },
    {
      image:
        "https://i.pinimg.com/736x/d4/3d/d6/d43dd6e27b79a2fbdf5a4d85f4bda92f.jpg",
      alt: "Beachfront Villa",
    },
  ];

  const rightSliderImages = [
    {
      image:
        "https://media.istockphoto.com/id/512123318/photo/woman-doing-shopping.jpg?s=612x612&w=0&k=20&c=jHaadN8q2U_VaBfWlqls9vb3ZmrNJN42n-Y0uOZ2ngc=",
      alt: "Property 1",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-female-tourist-doing-shopping-260nw-2292548087.jpg",
      alt: "Property 2",
    },
    {
      image:
        "https://media.istockphoto.com/id/1073935306/photo/girls-carrying-shopping-bags.jpg?s=612x612&w=0&k=20&c=JB-TrME32dc0VTnaXVxsbJIExZqR71m-iyVOnG-7puM=",
      alt: "Property 3",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-900">
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/90 z-10" />

      
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {backgroundSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Content Container with Grid */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Decorative line */}
            <div className="mb-8 flex items-center">
              <div className="h-1 w-12 bg-rose-400"></div>
              <span className="ml-4 text-sm font-medium uppercase tracking-wider text-rose-500">
                Welcome to Our Platform
              </span>
            </div>

            {/* Main heading with animated typing effect */}
            <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let us find your
              <strong className="mt-2 block font-extrabold text-rose-500 animate-pulse font-heading">
                Product Today.
              </strong>
            </h1>

            {/* Features list */}
            <div className="mt-8 space-y-4 text-gray-100 font-sans">
              <div className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg">Premium Qualities</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg">Valuable price</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center rounded-lg bg-rose-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 active:scale-95"
              >
                <span className="absolute -end-2 -top-2 hidden h-6 w-6 animate-bounce rounded-full bg-rose-400 sm:block"></span>
                Shop Now
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 active:scale-95"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 font-display">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2k+</div>
                <div className="mt-1 text-sm text-gray-300">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1.5k+</div>
                <div className="mt-1 text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="mt-1 text-sm text-gray-300">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Slider */}
          <div className="hidden lg:block">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="w-full aspect-[4/3]"
              >
                {rightSliderImages.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="h-14 w-8 rounded-full border-2 border-white p-2">
          <div className="h-3 w-full rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
