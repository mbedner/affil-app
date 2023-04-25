import React from "react";
import { client } from "../../lib/client";
import { Product } from "../../components";

const ShopListing = ({ products }) => {
  console.log(products[0].products);
  return (
    <div className="bg-gray-200 h-full m-auto">
      <div className="container m-auto grid lg:grid-cols-3 sm:grid-cols-2 px-3 md:px-4 xl:px-0 sm:gap-10 gap-6 sm:py-12 py-6 flex-wrap">
        {products?.map((product) =>
          product.products.map((prod) => (
            <Product key={product._id} product={prod} />
          ))
        )}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "category"] {
    slug {
      current
    }
  }
  `;

  const categories = await client.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

////// THIS IS CORRECT (below)

export const getStaticProps = async ({ params: { slug } }) => {
  const prodByCatQuery = `*[_type == 'category' && slug.current == "${slug}"] {
    ...,
    "products": *[_type == 'product' && references(^._id)]
  }`;
  const products = await client.fetch(prodByCatQuery);

  return {
    props: { products },
  };
};

export default ShopListing;
