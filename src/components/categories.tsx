import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      <Wrapper>
        <div className="my-[100px]">
          <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myBlackHead mb-4">
              Categories
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>
      
          {/* start categories from here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* category1 */}
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
              <Link href={"/tops"}>
                <Image
                  src={"/jewlery.jpg"}
                  alt="top"
                  height={350}
                  width={350}
                  className="rounded-xl duration-300 group-hover:scale-125"
                />
                <div
                  className="hidden lg:block absolute -bottom-24 group-hover:bottom-4
               duration-300 w-full text-center text-myWhite bg-myBlackPara/70 
               scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">tops</h1>
                </div>

                <div
                  className="block lg:hidden absolute duration-300 w-full text-center z-[100] bottom-24
               text-myWhite bg-myBlackPara/70 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">tops</h1>
                </div>
              </Link>
            </div>

            {/* catergory 2 */}
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
              <Link href={"/pants"}>
                <Image
                  src={"/jeans.jpg"}
                  alt="top"
                  height={350}
                  width={350}
                  className="rounded-xl duration-300 group-hover:scale-125"
                />
                <div
                  className="hidden lg:block absolute -bottom-24 group-hover:bottom-4
               duration-300 w-full text-center text-myWhite bg-myBlackPara/70 
               scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">pants</h1>
                </div>

                <div
                  className="block lg:hidden absolute duration-300 w-full text-center z-[100] bottom-24
               text-myWhite bg-myBlackPara/70 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">pants</h1>
                </div>
              </Link>
            </div>
            

            {/* catergory 3 */}
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
              <Link href={"/jewlery"}>
                <Image
                  src={"/backpack.jpg"}
                  alt="top"
                  height={350}
                  width={350}
                  className="rounded-xl duration-300 group-hover:scale-125"
                />
                <div
                  className="hidden lg:block absolute -bottom-24 group-hover:bottom-4
               duration-300 w-full text-center text-myWhite bg-myBlackPara/70 
               scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">jewlery</h1>
                </div>

                <div
                  className="block lg:hidden absolute duration-300 w-full text-center z-[100] bottom-24
               text-myWhite bg-myBlackPara/70 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">jewlery</h1>
                </div>
              </Link>
            </div>
            {/* catergory 4 */}
            <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
              <Link href={"/shoes"}>
                <Image
                  src={"/sneakers.jpg"}
                  alt="top"
                  height={350}
                  width={350}
                  className="rounded-xl duration-300 group-hover:scale-125"
                />
                <div
                  className="hidden lg:block absolute -bottom-24 group-hover:bottom-4
               duration-300 w-full text-center text-myWhite bg-myBlackPara/70 
               scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">shoes</h1>
                </div>

                <div
                  className="block lg:hidden absolute duration-300 w-full text-center z-[100] bottom-24
               text-myWhite bg-myBlackPara/70 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl"
                >
                  <h1 className="uppercase">shoes</h1>
                </div>
              </Link>
            </div>



          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Categories;
