"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";
const Toast = ({ cart }: any) => {
  const dispatch = useAppDispatch();

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
      <div
        className="w-fit  ml-auto"
        onClick={() => {
          dispatch(addToCart(cart));
        }}
      >
        <Button
          onClick={notify}
          variant="ghost"
          className="group ml-auto hover:bg-transparent bg-myBlackHead
                       text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold
                        tracking-tight rounded-xl  "
        >
          <FaCartShopping className=" mr-2 h-4 w-4 " /> Add to Cart
        </Button>
        {/* <button >Notify!</button> */}
      </div>
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
};

export default Toast;
