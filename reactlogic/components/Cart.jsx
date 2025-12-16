import React from "react";

export default function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 && <p>No items in cart.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow bg-white"
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-green-600 text-lg">₹{item.price}</p>

            <img
              src={item.img}
              alt={item.name}
              className="w-56 h-56 object-contain my-4 mx-auto"
            />

            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
