"use client";

import Image from "next/image";
import Wrapper from "./Wrapper";
import { Button } from "./ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Card from "./Card";
import { useAppSelector } from "@/app/store/hooks";
// export const products = [
//   {
//     title: "Tee Shirt",
//     imageUrl: "tee",
//     price: 25,
//     alt: 'tee shirt',
//     desc: "Soft and cozy tee with a bit of color.",
//     category:'tops',
//     slug:"tshirt"
//   },
//   {
//     title: "Hoodie",
//     imageUrl: "hoodie",
//     price: 45,
//     alt: 'hoodie',
//     desc: "Warm and stylish hoodie for chilly days.",
//     category:'tops',
//     slug:'hoodie'
//   },
//   {
//     title: "Jeans",
//     imageUrl: "jeans",
//     price: 35,
//     alt: 'jeans',
//     desc: "Classic denim jeans for a timeless look.",
//     category:'pants',
//     slug:'jean'

//   },
//   {
//     title: "Sneakers",
//     imageUrl: "sneakers",
//     price: 50,
//     alt: 'sneakers',
//     desc: "Comfortable and trendy sneakers for everyday wear.",
//     category:'shoes',
//     slug:'shoe'
//   },
//   {
//     title: "Backpack",
//     imageUrl: "backpack",
//     price: 30,
//     alt: 'backpack',
//     desc: "Spacious and durable backpack for all your essentials.",
//     category:'jewlery',
//     slug: 'bag'

//   },
//   {
//     title: "Beanie",
//     imageUrl: "beanie",
//     price: 15,
//     alt: 'beanie',
//     desc: "Cozy beanie to keep you warm during the colder months.",
//     category:'tops',
//     slug: 'beanie'
//   }
// ];

const BestSellingProduct = () => {
  const products = useAppSelector((state) => state.products);
  const bestSell = products.slice(3,6)

  return (
    <>
      <Wrapper>
        <div className="my-[100px]">
          <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myBlackHead mb-4">
              Best Selling Products
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>

          {/* best selling product */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 ">
            {bestSell.map((item:any, index) => {
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

            {/* <Card/>
          <Card/> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default BestSellingProduct;
