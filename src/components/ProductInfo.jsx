import React from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

const ProductInfo = () => {
  return (
    <div className="px-16 flex flex-col gap-5">
      <h1 className="text-gray-400 font-semibold">CONVERSE</h1>
      <h2 className="text-[56px] font-bold leading-16 ">Walk Star Trainer</h2>
      <p className="text-lg text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex gap-4">
        <span className="font-bold text-xl">Rp799.000</span>
        <span className="text-xl">Rp999.000</span>
      </div>
      <div className="flex gap-2.5 pt-12">
        <button className="bg-gray-100 w-10 h-10 rounded-lg flex justify-center items-center">
          <Minus className="text-amber-600 w-8 h-8" />
        </button>
        <div className="bg-gray-100 w-10 h-10 rounded-lg flex justify-center items-center text-lg font-semibold">1</div>
        <button className="bg-gray-100 w-10 h-10 rounded-lg flex justify-center items-center">
          <Plus className="text-amber-600 w-8 h-8" />
        </button>
        <button className="bg-amber-600 w-32 h-10 rounded-lg flex justify-center items-center text-lg font-semibold text-white ml-2.5">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
