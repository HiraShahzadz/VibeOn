import React from "react";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return (
    <div className="flex-[2]">
      <div className=" h-14 bg-white flex items-center border-b border-[#1a0a34] justify-between p-2 text-[#cbcbcb]">
        <span>Jane</span>
        <div className=" flex gap-2">
          <img className="h-4 cursor-pointer" src={Add} alt="" />
          <img className="h-4 cursor-pointer" src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
