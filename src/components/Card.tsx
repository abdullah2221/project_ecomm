import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Button } from "./ui/button";
import { PopoverDemo } from "./bstSellingCartPopover";
export interface types {
  url: string;
  title: string;
  desc: string;
  price: number;
  alt: string;
  catergory: string;
  slug: string;
  disc: number;
}
const Card = ({
  url,
  title,
  desc,
  price,
  alt,
  catergory,
  slug,
  disc,
}: types) => {
  return (
    <>
      <div className="max-w-[350px] h-[35rem] p-4 mx-auto rounded-xl relative shadow-md group">
        <Link href={`/${catergory}/${slug}`}>
          <div className="block relative h-[23rem] rounded overflow-hidden ">
            <Image src={`/${url}.jpg`} alt={alt} height={400} width={400} />
          </div>
          <div className="mt-5">
            <h2 className="scroll-m-20  line-clamp-1 text-lg  font-semibold tracking-tight lg:text-lg text-myBlackHead transition-colors">
              {title}
            </h2>
            <p className=" mt-2 scroll-m-20 text-sm font-medium tracking-tight text-myBlackPara transition-colors line-clamp-1">
              {desc}
            </p>
            {price && (
              <div className="flex gap-x-5">
                <p
                  className={`my-2 scroll-m-20 text-lg font-bold tracking-tight text-myBlackHead transition-colors ${
                    disc > 0 &&
                    "line-through decoration-2 decoration-myOrange/70"
                  }`}
                >
                  ${price}
                </p>
                {disc > 0 && (
                  <p className=" my-2 scroll-m-20 text-lg font-bold tracking-tight text-myBlackHead transition-colors">
                    ${price - (price * disc) / 100}
                  </p>
                )}
              </div>
            )}
          </div>
        </Link>
        <div >
          <div className="absolute bottom-4 right-2">
            <PopoverDemo slug={slug}/>

          </div >
          
          {/* <Button
            variant="ghost"
            className="group  hover:bg-transparent bg-myBlackHead text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-4 right-2"
          >
            <FaCartShopping className=" mr-2 h-4 w-4 " /> Add to Cart
          </Button> */}

          <Button
            variant="ghost"
            className="group  hover:bg-transparent bg-myBlackHead text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-4 left-2"
          >
            <FaHeart className=" mr-2 h-4 w-4 " /> Buy Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
