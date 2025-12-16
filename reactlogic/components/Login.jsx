import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", email);
    navigate("/");
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-10 text-center mt-10">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 w-full rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
