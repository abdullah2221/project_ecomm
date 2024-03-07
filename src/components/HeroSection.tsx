import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="mb-[100px]">
        <div
          className="hero min-h-[80vh] bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        >
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
                Avant- <span className="text-myOrange">Garde</span>
              </h1>
              <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
                Reflecting a vision of a better future, with flowing fabrics,
                natural materials, and soft, harmonious colors.
              </p>
              <Button variant="ghost" className="outline outline-offset-2  outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange">
                <AiFillShopping className="mr-2 h-8 w-6 group-hover:text-myOrange duration-300 group-hover:animate-bounce" />
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
