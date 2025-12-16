import { useEffect, useState } from "react";
import Product from "./components/Product";
import Products from "./components/Products";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

import About from "./components/About";
import Contact from "./components/Contact";

import { Link, Routes, Route } from "react-router-dom";
import Cart from "./components/cart";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="w-full mx-auto flex items-center justify-between p-4">

          <Link
            to="/"
            className="text-2xl font-bold tracking-tight hover:text-indigo-400 transition"
          >
            MERN Store
          </Link>

          <nav className="flex gap-6 text-lg">
            <Link className="hover:text-indigo-400 transition" to="/">Home</Link>
            <Link className="hover:text-indigo-400 transition" to="/about">About</Link>
            <Link className="hover:text-indigo-400 transition" to="/contact">Contact</Link>

            <Link className="hover:text-indigo-400 transition" to="/cart">
              Cart ({cart.length})
            </Link>

            {localStorage.getItem("user") ? (
              <button
                onClick={logout}
                className="hover:text-red-400 transition"
              >
                Logout
              </button>
            ) : (
              <Link className="hover:text-green-400 transition" to="/login">
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* FULL WIDTH PAGE CONTENT */}
      <main className="w-full min-h-[calc(100vh-80px)] px-10 py-6">
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product/:id" element={<Product />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />

          <Route path="/buynow/:id" element={<BuyNow />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
