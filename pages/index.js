import React from "react";
import { Product } from "../components";
import { client } from "../lib/client";

const Home = ({ products }) => {
  return (
    <div className="bg-gray-200 h-full">
      <div className="container m-auto grid lg:grid-cols-3 sm:grid-cols-2 px-3 md:px-4 xl:px-0 sm:gap-10 gap-6 sm:py-12 py-6 flex-wrap">
        {products?.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return {
//     props: { products },
//   };
// };

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
