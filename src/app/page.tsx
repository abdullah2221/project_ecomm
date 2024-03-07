import Hero from "@/components/HeroSection";
import Service from "@/components/Service";
import Promo from "@/components/Promo";
import Categories from "@/components/categories";
import BestSellingProduct from "@/components/bstSellingProducts";
import FeaturedProducts from "@/components/featuredProducts";

export default function Home() {
  return (
    <>
      <div>
        <Hero />

        <FeaturedProducts />
        <Service />
        <Promo />
        <Categories />

        <BestSellingProduct />
      </div>
    </>
  );
}
