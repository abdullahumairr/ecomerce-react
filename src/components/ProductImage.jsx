import React from "react";

const ProductImage = () => {
  return (
    <div className="flex flex-col gap-4 pl-20">
      <img
        className="rounded-lg w-[410px] h-[410px]"
        src="/productimage/1.jpg"
        alt="product image"
      />
      <div className="flex gap-2">
        <img
          className="rounded-lg w-24 h-w-24"
          src="/productimage/1.jpg"
          alt="product image"
        />
        <img
          className="rounded-lg w-24 h-w-24"
          src="/productimage/2.jpg"
          alt="product image"
        />
        <img
          className="rounded-lg w-24 h-w-24"
          src="/productimage/3.jpg"
          alt="product image"
        />
        <img
          className="rounded-lg w-24 h-w-24"
          src="/productimage/4.jpg"
          alt="product image"
        />
      </div>
    </div>
  );
};

export default ProductImage;
