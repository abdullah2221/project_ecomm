import Wrapper from "./Wrapper";

const Promo = () => {
  return (
    <Wrapper>
      <div className="my-[100px]">
        <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myBlackHead mb-4">
            Promotions
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>


        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="group hero h-[25rem] rounded-xl "
            style={{
              backgroundImage: "url(/promo1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70 group-hover:opacity-50 duration-300 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 uppercase scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
                  get upto <span className="text-myOrange">60%</span> off
                </h1>
                <p className="mb-2 scroll-m-20 text-base font-medium tracking-tight text-myWhite">
                  Flash Sale, get upto 60% off on the new Clothers
                </p>
              </div>
            </div>
          </div>


          <div
            className=" group hero h-[25rem] rounded-xl"
            style={{
              backgroundImage: "url(/promo2.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70 group-hover:opacity-50 duration-300 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 uppercase scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
                  get upto <span className="text-myOrange">30%</span> off
                </h1>
                <p className="mb-2 scroll-m-20 text-base font-medium tracking-tight text-myWhite">
                  Flash Sale, get upto 30% off on the New Jewlery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Promo;
