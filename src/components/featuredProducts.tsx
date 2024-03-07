"use client";
import Wrapper from "./Wrapper";
import Slider from "react-slick";
// import { products } from "./bstSellingProducts";
import { useAppSelector } from "@/app/store/hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
const FeaturedProducts = () => {
  const products = useAppSelector((state) => state.products);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows:false,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Wrapper>
        <div className="mt-[100px] mb-[100px]">
          {/* heading */}
          <div className="text-center mb-10">
            <h1 className="scroll-m-20 capitalize text-4xl font-extrabold tracking-tight lg:text-5xl text-myBlackHead mb-4">
              featured Products
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {products.map((item:any, index) => {
                return (
                  <>
                    <Card
                      key={index}
                      alt={item.title}
                      desc={item.description}
                      title={item.title}
                      price={item.price}
                      url={item.image[0]}
                      catergory={item.category}
                      slug={item.slug}
                      disc={item.discount}
                    />
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default FeaturedProducts;
