import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-6 border-b border-gray-300 shadow-sm">
      <h1 className="text-lg font-bold">sneakers</h1>
      <div className="relative">
        <img className="w-10 h-10" src="/nav/cart.svg" alt="cart item" />
        <h1 className="w-5 h-5 bg-red-400 flex items-center justify-center absolute -top-0 -right-0 rounded-full">1</h1>
      </div>
    </nav>
  );
};

export default Navbar;
