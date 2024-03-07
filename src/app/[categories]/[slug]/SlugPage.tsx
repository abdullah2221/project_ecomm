"use client";
import Wrapper from "@/components/Wrapper";
import type { StaticImageData } from "next/image";
// import { products } from "@/components/bstSellingProducts";
import { products } from "@/app/utils/mock";
// import { types } from "@/components/Card";
import { Product } from "@/app/utils/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useAppSelector } from "@/app/store/hooks";
import SlugImageComponent from "@/components/SlugImageComponent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/features/cart";
import Toast from "@/components/addToCartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const products = useAppSelector((state) => state.products);

  const dispatch = useDispatch();
  const slug = params.slug;

  const data1: Product[] = products.filter((val) => val.slug == slug);
  const [cart, setCart] = useState({
    id: data1[0].id,
    title: data1[0].title,
    image: data1[0].image[0],
    slug: data1[0].slug,
    price: data1[0].price,
    category: data1[0].category,
    size: data1[0].size[0],

    qty: data1[0].qty,
    discount: data1[0].discount,
    color: data1[0].color[0],
  });
  console.log(cart);
  // console.log(data1[0].image[0]);
  // console.log(data1[0].color[0]);
  return (
    <>
      <Wrapper>
        <div className="mt-[50px] mb-[100px]">
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <SlugImageComponent image={data1[0]?.image} />

                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">
                    {cart?.category}
                  </h2>
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl capitalize text-myBlackHead mb-1">
                    {cart?.title}
                  </h1>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-myOrange"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-myOrange"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-myOrange"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-myOrange"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-myOrange"
                    />
                  </div>
                  <div className="divider"></div>

                  <p className="leading-relaxed scroll-m-20 text-base font-normal  text-myBlackPara ">
                    {data1[0]?.description}
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-b-2">
                    <div className="flex">
                      <span className="mr-3  scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                        Color
                      </span>
                      {data1[0].color.map((item, i) => (
                        <button
                          onClick={() => {
                            setCart({ ...cart, color: item });
                          }}
                          style={{ backgroundColor: item }}
                          key={i}
                          className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                        />
                      ))}
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                        Size
                      </span>
                      <div className="form-control w-full max-w-xs">
                        <select
                          onChange={(e) => {
                            setCart({ ...cart, size: e.target.value });
                          }}
                          className="select select-bordered"
                        >
                          <option disabled selected>
                            Size
                          </option>
                          {data1[0].size.map((item, i) => (
                            <option key={i}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex  items-center">
                    <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                      Quantity
                    </span>
                    <Button
                      onClick={() => {
                        setCart({
                          ...cart,
                          qty: cart.qty <= 1 ? 1 : --cart.qty,
                        });
                      }}
                      variant="ghost"
                      className="group bg-myBlackHead
                       text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold
                        tracking-tight rounded-xl w-fit h-fit  "
                    >
                      <FaMinus className=" mr-2 h-4 w-4 " />
                    </Button>
                    <div className="mr-2 ml-2 scroll-m-20 text-xl font-semibold tracking-tight">
                      {cart.qty}
                    </div>

                    <Button
                      onClick={() => setCart({ ...cart, qty: ++cart.qty })}
                      variant="ghost"
                      className="group bg-myBlackHead
                       text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold
                        tracking-tight rounded-xl w-fit h-fit  "
                    >
                      <FaPlus className=" mr-2 h-4 w-4 " />
                    </Button>
                  </div>
                  <div className="divider"> </div>
                  <div className="flex">
                    <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                      {cart?.price && (
                        <div className="flex gap-x-5">
                          <p
                            className={`my-2 scroll-m-20 text-lg font-bold tracking-tight text-myBlackHead transition-colors ${
                              cart?.discount > 0 &&
                              "line-through decoration-2 decoration-myOrange/70"
                            }`}
                          >
                            ${cart?.price * cart.qty}
                          </p>
                          {cart.discount > 0 && (
                            <p className=" my-2 scroll-m-20 text-lg font-bold tracking-tight text-myBlackHead transition-colors">
                              $
                              {(cart.price -
                                (cart.price * cart.discount) / 100) *
                                cart.qty}
                            </p>
                          )}
                        </div>
                      )}
                    </span>
                    <Toast cart={cart} />
                  </div>

                  <Button
                    variant="ghost"
                    className="mt-5 w-full py-5 hover:bg-transparent bg-myBlackHead
                       text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold
                        tracking-tight rounded-xl  "
                  >
                    <FaHeart className=" mr-2 h-4 w-4 " /> Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default SlugPage;
