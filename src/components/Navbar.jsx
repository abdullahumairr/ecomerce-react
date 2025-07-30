import React, { useState } from "react";

const Navbar = ({ cartCount, onClearCart }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex justify-between px-8 py-6 border-b border-gray-300 shadow-sm relative">
      <h1 className="text-lg font-bold">sneakers</h1>
      <div className="relative">
        <img
          className="w-10 h-10 cursor-pointer"
          src="/nav/cart.svg"
          alt="cart icon"
          onClick={toggleDropdown}
        />
        {cartCount > 0 && (
          <h1 className="w-5 h-5 bg-red-400 text-white text-sm font-bold flex items-center justify-center absolute -top-1 -right-1 rounded-full">
            {cartCount}
          </h1>
        )}

        {/* Dropdown */}
        {showDropdown && cartCount > 0 && (
          <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg border rounded-lg px-4 py-2">
            <p className="text-sm mb-2">Items in cart: {cartCount}</p>
            <button
              onClick={() => {
                onClearCart();
                setShowDropdown(false);
              }}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete all
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
