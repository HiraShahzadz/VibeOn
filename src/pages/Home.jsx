import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border w-[90%] overflow-hidden border-white lg:w-[100%] h-[90%] m-10 flex rounded-lg">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
