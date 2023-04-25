import Link from "next/link";
import React from "react";
import { RiPriceTag3Line, RiHeartLine, RiSearchLine } from "react-icons/ri";
import { FaPaw } from "react-icons/fa";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = ({}) => {
  const { showCart, setShowCart, cartItems } = useStateContext();
  return (
    <div className="relative">
      <div className="text-white w-full bg-primary-100">
        <div className="container m-auto py-2 grid sm:grid-cols-3 auto-cols-fr grid-cols-2 items-center sm:gap-6 gap-2 px-2 md:px-4 xl:px-0">
          <Link href="/">
            <a>
              <h2 className="text-xl font-bold flex-auto">Pet Site</h2>
            </a>
          </Link>
          <form className="flex-auto order-last sm:order-none col-span-2 sm:col-span-1 bg-white rounded">
            <div className="text-gray-800 flex items-center justify-center">
              <input
                type="search"
                placeholder="Search"
                className="p-2 rounded w-full text-gray-800"
              />
              <button className="p-2 text-primary-200">
                <RiSearchLine style={{ fontSize: 20 }} />
              </button>
            </div>
          </form>
          <nav className="flex-auto">
            <ul className="flex sm:gap-0 gap-4 flex justify-end">
              <li className="font-semibold">
                <Link href="/shop">
                  <a className="flex gap-2 items-center hover:bg-primary-200 py-1 px-2 rounded">
                    <RiPriceTag3Line
                      aria-label="shop"
                      style={{ opacity: "60%", fontSize: 20 }}
                    />
                    <span className="hidden sm:block">Shop</span>
                  </a>
                </Link>
              </li>
              <li className="font-semibold">
                <button
                  onClick={() => setShowCart(true)}
                  className="flex gap-2 items-center hover:bg-primary-200 py-1 px-2 rounded"
                >
                  <span className="relative">
                    <RiHeartLine
                      aria-label="wishlist"
                      style={{ opacity: "60%", fontSize: 20 }}
                    />
                    {/* {cartItems.length > 0 && (
                      <span className="text-xs absolute bg-red-500 w-4 h-4 rounded-full -top-2 -right-2 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )} */}
                  </span>
                  <span className="hidden sm:block">Wishlist</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="py-2 w-full border-b border-solid border-gray-300 bg-primary-200 px-2 sm:px-0">
        <div className="capitalize font-semibold container m-auto text-white sm:text-center flex gap-2 sm:items-center sm:justify-center text-left sm:text-base text-sm">
          <span
            role="img"
            aria-label="animal paw prints"
            className="text-white"
          >
            <FaPaw />
          </span>
          <p className="text-sm mb-0 mt-1">
            Curated Amazon Products for your furry friend
          </p>
        </div>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
