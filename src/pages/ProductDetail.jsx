import React from "react";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";

const ProductDetail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mx-96">
      <div className="flex">
        {/* left content */}
        <div className="flex-1">
          <ProductImage />
        </div>

        {/* right content */}
        <div className="flex-1">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
