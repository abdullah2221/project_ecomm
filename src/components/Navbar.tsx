"use client";
import Link from "next/link";
import { NavigationMenuDemo } from "./Navlinks";
import { useAppSelector } from "@/app/store/hooks";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <>
      <Wrapper>
        <div className="navbar bg-myWhite">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="p-0 text-2xl btn btn-ghost lg:hidden"
              >
                <GiHamburgerMenu size={20} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52"
              >
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <details>
                    <summary>Women</summary>
                    <ul className="p-2">
                      <li>
                        <Link href={"/tops"}>Tops</Link>
                      </li>
                      <li>
                        <Link href={"/pants"}>Pants</Link>
                      </li>
                      <li>
                        <Link href={"/jewlery"}>Accessories/Jewlery</Link>
                      </li>
                      <li>
                        <Link href={"/shoes"}>Shoes</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <Image
              src={"/logo.png"}
              height={12}
              width={96}
              alt="Logo"
              className="hidden lg:block ml-4"
            />
            {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          </div>
          <div className="navbar-center ">
            <Image
              src={"/logo.png"}
              height={12}
              width={96}
              alt="Logo"
              className="block lg:hidden "
            />
            <div className="hidden lg:flex">
              <NavigationMenuDemo />
            </div>
          </div>
          <div className="navbar-end">
            <Link href={"/cart"}>
              <div className="flex-none">
                <div
                  tabIndex={0}
                  role="button"
                  className=" pr-4 cursor-pointer group "
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7  group-hover:text-myOrange duration-300 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {cart.length > 0 && (
                      <span className="badge badge-sm indicator-item group-hover:bg-myBlackPara group-hover:text-myWhite font-semibold">
                        {cart.length}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Navbar;
