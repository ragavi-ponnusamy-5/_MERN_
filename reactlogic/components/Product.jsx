import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../utils/api";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-full max-w-[1600px] mx-auto px-10 flex flex-col items-center text-center">
      <img
        src={product.img}
        alt={product.name}
        className="w-72 h-72 object-contain mb-6"
      />

      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-2xl text-green-600 font-semibold">₹{product.price}</p>
      <p className="text-gray-600 mb-6">{product.category}</p>

      <Link to={`/buynow/${product.id}`}>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
          Buy Now
        </button>
      </Link>
    </div>
  );
}
