import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { urlFor } from "../lib/client";

const Product = ({ product }) => {
  const { name, brand, image, price, slug } = product;
  return (
    <div className="w-full bg-white p-3 shadow-sm rounded-lg hover:shadow-xl transform hover:-translate-y-2 duration-200 overflow-hidden relative">
      <a
        href="/"
        className="group absolute top-0 right-0 py-2 bg-yellow-400 hover:bg-yellow-500 px-4 flex items-center justify-center gap-1 font-semibold rounded-bl-lg"
      >
        <span className="text-lg text-gray-800">${price}</span>
        <span className="block w-0 overflow-hidden group-hover:w-full">
          <RiArrowRightLine />
        </span>
      </a>
      <Link href={`/product/${slug.current}`}>
        <a>
          <div className="w-full h-64 bg-white mb-4 rounded overflow-hidden">
            <img
              src={urlFor(image[0])}
              alt={name}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-sm font-bold group-hover:underline text-gray-800 line-clamp-2 h-10 overflow-hidden">
            {name}
          </p>
          <span className="text-sm text-gray-700 group-hover:underline">
            by {brand}
          </span>
          <div className="mb-2"></div>
        </a>
      </Link>
    </div>
  );
};

export default Product;
