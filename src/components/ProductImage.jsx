import React, { useState } from "react";

const image = [
  "/productimage/1.jpg",
  "/productimage/2.jpg",
  "/productimage/3.jpg",
  "/productimage/4.jpg",
];

const ProductImage = () => {
  const [activeImage, setActiveImage] = useState(image[0]);

  return (
    <div className="flex flex-col gap-4 pl-20">
      <img
        className="rounded-lg w-full h-full"
        src={activeImage}
        alt="product image"
      />
      <div className="flex gap-2 justify-between">
        {image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`product thumbnail ${index + 1}`}
            className={`rounded-lg w-24 cursor-pointer border-2 ${
              img === activeImage ? "border-black" : "border-transparent"
            }`}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
