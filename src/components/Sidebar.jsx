import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Chats from "../components/Chats";
const Sidebar = () => {
  return (
    <div className="flex-1 overflow-hidden bg-[#16082c] relative">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
