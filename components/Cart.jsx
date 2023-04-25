import React, { useRef } from "react";
import Link from "next/link";
import { RiCloseFill, RiArrowLeftSLine } from "react-icons/ri";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const { cartItems, setShowCart, onRemove } = useStateContext();

  return (
    <div
      className="fixed right-0 top-0 w-screen bg-black bg-opacity-50 z-[999] h-screen"
      ref={cartRef}
    >
      <div className="bg-white w-full lg:w-1/3 md:w-1/2 h-screen p-6 float-right">
        <button
          type="button"
          className="flex gap-2 items-center"
          onClick={() => setShowCart(false)}
        >
          <RiArrowLeftSLine />
          <span className="font-semibold text-lg">
            Your Wishlist
            <span className="ml-2 font-normal text-sm text-gray-600">
              {cartItems.length > 0 && `(${cartItems.length} items)`}
            </span>
          </span>
        </button>
        <div className="my-4">
          {cartItems.length < 1 && (
            <div className="flex justify-center items-center flex-col mt-20">
              <h4 className="text-xl mb-4">No Items in Your Wishlist</h4>
              <Link href="/">
                <button
                  type="button"
                  className="flex justify-center items-center px-8 rounded-md bg-yellow-400 font-semibold h-10 text-gray-900 hover:bg-yellow-500"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
          <div>
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div
                  className="flex gap-4 p-2 rounded-xl hover:bg-gray-100 text-gray-800"
                  key={item._id}
                >
                  <div className="rounded-lg flex items-center justify-center p-6 border-solid border border-gray-300 w-24 h-24 bg-white">
                    <img
                      src={urlFor(item?.image[0])}
                      className="w-24 h-24 object-contain p-1"
                      alt={item.name}
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="text-gray-800 line-clamp-2 max-h-12 overflow-y-hidden">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-gray-600">${item.price}</p>
                  </div>
                  <button
                    type="button"
                    className="flex"
                    onClick={() => onRemove(item)}
                  >
                    <RiCloseFill />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
