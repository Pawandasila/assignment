"use client"
import Category from "./_components/category";
import Hero from "./_components/hero";
import FeaturedProducts from "./_components/TrandingBrands";
import {TrendingProducts} from "./_components/TrendingProducts";


export default function Home() {
  return (
    <>
      <Hero/>
      <Category/>
      <TrendingProducts/>
      <FeaturedProducts/> 
    </>
  );
}
