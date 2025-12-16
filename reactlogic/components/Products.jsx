import React from "react";
import { Link } from "react-router-dom";
import { products } from "../utils/api";

export default function Products({ setCart, cart }) {
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-10">
      <h2 className="text-3xl font-semibold mb-6">All Products</h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-6 
        gap-8
      ">
        {products.map((p) => (
          <div
            key={p.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-40 h-40 object-contain mx-auto mb-4"
            />

            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-lg font-semibold text-green-600">₹{p.price}</p>
            <p className="text-gray-600 mb-3">{p.category}</p>

            <Link
              to={`/product/${p.id}`}
              className="text-indigo-600 underline hover:text-indigo-800"
            >
              View Details
            </Link>

            <button
              onClick={() => addToCart(p)}
              className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
