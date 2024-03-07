"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hooks";
import { CartCard } from "@/components/CartCard";
const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  let total:any = cartArray.reduce((total, arr) => {
    return Math.floor(total + (arr.price - (arr.price * arr.discount) / 100) * arr.qty);
  }, 0);

  console.log(cartArray);
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* items */}
        <div className="col-span-2">
          <CartCard  />
        </div>

        {/* summary */}
        <div className="bg-myBlackPara/5 p-5 rounded-xl">
          {/* heading */}
          <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead">
            Order summary
          </h2>
          <div className="divider mt-0 mb-1"></div>
          <div className="text-sm font-medium tracking-tight text-myBlackPara">
            <div className="flex justify-between items-center capitalize">
              <h2> Sub Total</h2>
              <h2>${total}</h2>
            </div>
            <div className="flex justify-between items-center capitalize">
              <h2> Delivery Charges</h2>
              <h2>TBD</h2>
            </div>
            <div className="flex justify-between items-center capitalize">
              <h2> Sale Tax</h2>
              <h2>TBD</h2>
            </div>
          </div>
          <div className="divider mt-0 mb-1"></div>
          <div className="flex justify-between items-center uppercase font-bold text-myBlackHead">
            <h2> Sub Total</h2>
            <h2>${total}</h2>
          </div>
          <div className="divider mt-0 mb-1"></div>

          <Button
            // variant="ghost"
            className="group uppercase  hover:bg-transparent bg-myBlackHead w-full text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl "
          >
            processed to check out
          </Button>
          <div className="divider mt-0 mb-1"></div>

          <p className="mt-6 border-l-2 pl-6  text-xs text-center italic capitalize">
            {`*Delivery charges and the sales tax will be calculated in the checkout page`}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartPage;
