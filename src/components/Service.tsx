import Image from "next/image";
import Wrapper from "./Wrapper";
const Service = () => {
  return (
    <>
      <Wrapper>
        <section className="text-gray-600 body-font my-[100px]">
          <div className="container px-5  mx-auto">
            <div className="text-center mb-10">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myBlackHead mb-4">
                Services
              </h1>
              <div className="flex mt-2 justify-center">
                <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
              </div>
            </div>
            <div className=" flex flex-wrap  md:flex-row sm:flex-col sm:-m-4 -mx-4  py-20  md:space-y-0 space-y-6">
              <div className=" group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-2 flex-shrink-0">
                  <Image
                    alt="free delivery"
                    height={"100"}
                    width={"100"}
                    src={"/van.png"}
                  />
                </div>

                <div className="flex-grow">
                  <h2 className="group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-bold mb-3 text-myBlackHead  tracking-widest lg:text-xl">
                    free delivery
                  </h2>
                  <p className="  scroll-m-20  pb-2 text-base font-semibold tracking-tight text-myBlackPara  line-clamp-2">
                    Free delivery on above $1000
                  </p>
                </div>
              </div>

              <div className=" group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-2 flex-shrink-0">
                  <Image
                    alt="free delivery"
                    height={"100"}
                    width={"100"}
                    className=""
                    src={"/customer.png"}
                  />
                </div>

                <div className="flex-grow">
                  <h2 className="group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-bold text-myBlackHead  tracking-widest lg:text-xl mb-3">
                    24/7 Customer Service
                  </h2>
                  <p className="  scroll-m-20  pb-2 text-base font-semibold tracking-tight text-myBlackPara line-clamp-2">
                    For Queries and Questions Feel Free to Contact
                  </p>
                </div>
              </div>

              <div className=" group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-2 flex-shrink-0">
                  <Image
                    alt="free delivery"
                    height={"100"}
                    width={"100"}
                    className=""
                    src={"/guarntee.png"}
                  />
                </div>

                <div className="flex-grow">
                  <h2 className="group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-bold text-myBlackHead  tracking-widest lg:text-xl mb-3">
                   Money Back Guarantee
                  </h2>
                  <p className="  scroll-m-20  pb-2 text-base font-semibold tracking-tight text-myBlackPara line-clamp-2">
                    Get Money Back Guarantee on Damage Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Service;
