'use client'
import { addToCart } from "@/app/store/features/cart";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export function PopoverDemo({ slug }: { slug: string }) {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products).find(
    (val) => val.slug == slug
  );
  const [cart, setCart] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    slug: product?.slug,
    price: product?.price,
    category: product?.category,
    size: product?.size[0],

    qty: product?.qty,
    discount: product?.discount,
    color: product?.color[0],
  });
  const notify = () =>
    toast.success("🦄 product Added Successfully!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="group  hover:bg-transparent
           bg-myBlackHead text-myWhite
           hover:text-myBlackHead scroll-m-20 text-xs
            font-semibold tracking-tight rounded-xl "
          >
            <FaCartShopping className=" mr-2 h-4 w-4 " /> Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem]">
          {/* //size */}
          <div className="flex items-center">
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
                {product?.size.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="mr-3  scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
              Color
            </span>
            {product?.color.map((item, i) => (
              <button
                onClick={() => {
                  setCart({ ...cart, color: item });
                }}
                style={{ backgroundColor: item }}
                key={i}
                className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
              >
                {/* Add content for the button here if needed */}
              </button>
            ))}
          </div>
          <div className="w-fit" onClick={notify}>
            <Button
              onClick={() => {
                dispatch(addToCart(cart));
              }}
              variant="ghost"
              className="group mt-5 w-full  hover:bg-transparent
            bg-myBlackHead text-myWhite
            hover:text-myBlackHead scroll-m-20 text-xs
            font-semibold tracking-tight rounded-xl "
            >
              <FaCartShopping className=" mr-2 h-4 w-4 " /> Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
