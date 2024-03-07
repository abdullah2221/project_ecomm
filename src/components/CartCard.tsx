interface Props {
  src: string;
  title: string;
  price: number;
  size: string;
}
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "./ui/button";
import { FaTrash } from "react-icons/fa";
import { useAppSelector } from "@/app/store/hooks";
import { useDispatch } from "react-redux";
import { addCart, addToCart, deleteItem, subtractCart } from "@/app/store/features/cart";
export const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  console.log(cartArray.length);
  const dispatch = useDispatch();

  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex justify-between w-full p-10 py-3">
            <Image
              src={`/${item.image}.jpg`}
              alt={item.title}
              height={80}
              width={80}
              className="h-[100px] w-[100px]"
            />
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* title */}
                <h1 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                  {item.title} {/* Assuming 'title' should be 'item.title' */}
                </h1>
                {/* size */}
                <p className="mt-2 text-sm text-myBlackPara/80 font-semibold leading-none line-clamp-1">
                  size:&nbsp; <span>{item.size}</span>{" "}
                  {/* Assuming 'size' should be 'item.size' */}
                </p>
                {/* size */}
                <p className="mt-2 text-sm text-myBlackPara/80 font-semibold leading-none line-clamp-1">
                  color:&nbsp;{" "}
                  <span>
                    {" "}
                    <button
                      style={{ backgroundColor: item.color }}
                      className="border-2 border-gray-300 mr-1 rounded-full w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none"
                    />
                  </span>{" "}
                  {/* Assuming 'size' should be 'item.size' */}
                </p>
                <div className="mt-2 flex items-center">
                  <Button  onClick={()=>{dispatch(subtractCart(item))}}
                    variant="ghost"
                    className="group bg-myBlackHead
                       text-myWhite hover:text-myBlackHead  scroll-m-20 text-xs duration-300 font-semibold
                         rounded-lg w-fit h-fit  "
                  >
                    <FaMinus className="mr-2 h-4 w-4 text-center" />
                  </Button>
                  <div className="mr-2 ml-2 scroll-m-20 text-xl font-semibold tracking-tight">
                    {item.qty}
                  </div>

                  <Button onClick={()=>{dispatch(addCart(item))}}
                    variant="ghost"
                    className="group bg-myBlackHead
                       text-myWhite hover:text-myBlackHead  scroll-m-20 text-xs duration-300 font-semibold
                         rounded-lg w-fit h-fit  "
                  >
                    <FaPlus className="mr-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className=" lg:hidden mt-2 flex-col items-end gap-2">
              <h3 className="text-sm font-semi-bold  leading-none line-clamp-1 text-myBlackHead">
                <span>
                  Price:&nbsp;
                  <span>
                    &#36;
                    {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.qty
                      : item.price * item.qty}
                  </span>{" "}
                </span>
              </h3>
              <FaTrash
                onClick={() => {
                  dispatch(deleteItem(item.uuid));
                }}
                className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
              />
            </div>

            <div className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="text-sm font-semi-bold  leading-none line-clamp-1 text-myBlackHead">
                <span>
                  Price:&nbsp;
                  <span>
                    &#36;
                    {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.qty
                      : item.price * item.qty}
                  </span>{" "}
                  {/* Assuming 'price' should be 'item.price' */}
                </span>
              </h3>
              <FaTrash
                onClick={() => {
                  dispatch(deleteItem(item.uuid));
                }}
                className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
    </>
  );
};
