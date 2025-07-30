import React from "react";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";

const ProductDetail = ({ onAddToCart }) => {
  return (
    <div className="flex items-center justify-center min-h-screen mx-96">
      <div className="flex">
        <div className="flex-1">
          <ProductImage />
        </div>
        <div className="flex-1">
          <ProductInfo onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
