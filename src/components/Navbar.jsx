import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex items-center bg-[#1a0a34] h-14 p-4 border-b border-[#fdcfe2] justify-between text-[#fdcfe2]">
      <span className="font-bold hidden lg:inline">Vibe On</span>

      <div className="flex gap-2">
        <img
          className="bg-[#fdcfe2] h-6 w-6 rounded-full object-cover"
          src={currentUser.photoURL}
          alt={currentUser.displayName}
        />
        <span className="">John</span>
        <button
          onClick={() => signOut(auth)}
          className="bg-[#e4317b] absolute bottom-2 lg:relative lg:bottom-0 text-[#fdcfe2] text-sm border-0 cursor-pointer p-1 pl-2 pr-2 rounded-md"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
