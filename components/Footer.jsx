import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-t border-solid border-gray-300 text-gray-800 py-10">
      <div className="container m-auto px-2 md:px-4 xl:px-0">
        <div className="w-1/3 flex flex-col gap-3">
          <p className="text-gray-800">
            Discover the best pet automation products on Amazon curated for you.
          </p>
          <p className="text-sm text-gray-700">
            ©2022 Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
