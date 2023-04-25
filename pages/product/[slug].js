import React from "react";
import { RiHeartLine } from "react-icons/ri";
import Image from "next/image";
import prime from "../../assets/amazon-prime.png";
import { useStateContext } from "../../context/StateContext";

import { urlFor, client } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, brand } = product;
  const { onAdd } = useStateContext();

  return (
    <div className="bg-white h-full">
      <div className="container sm:py-12 py-6 m-auto grid sm:grid-cols-2">
        <div className="flex w-full items-center justify-center">
          <div className="flex gap-12 m-10 mt-0 m-auto w-full flex-col">
            <div className="cursor-pointer rounded-lg flex items-center justify-center p-6 border-solid border border-gray-300">
              <img
                src={urlFor(image && image[0])}
                className="object-contain w-80 h-80"
              />
            </div>
            <div className="flex gap-3 mt-5"></div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span>
            <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>
            <p className="text-gray-700">by {brand}</p>
          </span>
          <span className="w-16 px-2 py-1 flex items-center justify-center bg-white border border-solid border-gray-300 rounded shadow-sm">
            <Image src={prime} />
          </span>
          <p className="text-3xl font-semibold text-gray-800">${price}</p>
          <span className="mt-6 gap-2 flex items-center">
            <button
              onClick={() => onAdd(product)}
              className="flex justify-center items-center rounded-md border border-solid border-gray-300 text-2xl h-10 w-10 text-gray-800 hover:bg-gray-100"
            >
              <RiHeartLine />
            </button>
            <button className="flex justify-center items-center px-8 rounded-md bg-yellow-400 font-semibold h-10 text-gray-900 hover:bg-yellow-500">
              Purchase on Amazon
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
