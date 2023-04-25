import Link from "next/link";
import React from "react";
import { Product } from "../components";
import { client } from "../lib/client";

const Shop = ({ products }) => {
  const pets = ["dogs", "cats", "small pets"];
  const categories = [
    { name: "Cameras", url: "/shop/cameras" },
    { name: "Training", url: "/shop/training" },
    { name: "Cameras", url: "/" },
    { name: "Cameras", url: "/" },
    { name: "Cameras", url: "/" },
    { name: "Cameras", url: "/" },
    { name: "Cameras", url: "/" },
    { name: "Cameras", url: "/" },
    { name: "Cameras", url: "/" },
  ];

  return (
    <div className="bg-white">
      <div className="text-center py-12 container m-auto">
        <h2 className="text-2xl font-semibold mb-8">Shop by Pets</h2>
        <div className="flex gap-20 justify-center items-cemter text-center fex-col">
          {pets.map((pet) => (
            <div className="flex-col">
              <div className="flex flex-col items-center justify-center text-center capitalize">
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-3"></div>
                <p className="text-lg">{pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-12 container m-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-5 gap-20 justify-center items-cemter text-center fex-col">
          {categories.map((cat) => (
            <div className="flex-col">
              <div className="flex flex-col items-center justify-center text-center capitalize">
                <Link href={cat.url}>
                  <a>
                    <div className="w-40 h-40 rounded bg-gray-200 mb-3"></div>
                    <p className="text-lg">{cat.name}</p>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container m-auto sm:py-12 py-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Shop Products
          </h2>
          <div className="container m-auto grid lg:grid-cols-3 sm:grid-cols-2 px-3 md:px-4 xl:px-0 sm:gap-10 gap-6 flex-wrap">
            {products?.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Shop;
