import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      <div className="bg-white pb-5 pt-5 pr-10 pl-10 rounded-lg flex flex-col gap-2 items-center">
        <span className=" text-[#e4317b] font-bold text-2xl">Vibe On</span>
        <span className="text-[#b32c64] text-sm">Login</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-72">
          <input
            type="email"
            placeholder="email"
            className="p-3 border-b text-sm border-[#afafaf] placeholder:text-[#afafaf]"
          />
          <input
            type="password"
            placeholder="password"
            className="p-3 border-b text-sm border-[#afafaf] placeholder:text-[#afafaf]"
          />
          <button className="bg-[#e4317b] rounded-md  text-white p-2 font-bold cursor-pointer">
            Sign In
          </button>
        </form>
        {err && <span>Something went wrong</span>}
        <p className="text-[#b32c64] text-sm mt-2">
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
