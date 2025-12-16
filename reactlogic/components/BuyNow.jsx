import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/api";

export default function BuyNow() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="w-full max-w-[1600px] mx-auto px-10 text-center">
      <h2 className="text-3xl font-bold mb-2">Buy Now</h2>

      <img
        src={product.img}
        alt={product.name}
        className="w-72 h-72 object-contain mx-auto mt-4"
      />

      <h3 className="text-2xl font-semibold mt-4">{product.name}</h3>
      <p className="text-green-600 text-xl">₹{product.price}</p>

      <p className="text-xl mt-6 text-green-700 font-bold">
        Order has been placed! ✅
      </p>
    </div>
  );
}
