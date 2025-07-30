import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (count) => {
    setCartCount(cartCount + count);
  };

  const handleClearCart = () => {
    setCartCount(0);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} onClearCart={handleClearCart} />
      <ProductDetail onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
