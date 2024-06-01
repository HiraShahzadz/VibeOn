import React from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
function Input() {
  return (
    <div className="h-14 bg-gray-200 p-2 flex items-center justify-between">
      <input
        className="w-[80%] border-0 p-3 outline-none text-md text-[#16082c] bg-gray-200 "
        type="text"
        placeholder="Type something..."
      />
      <div className="flex items-center gap-2">
        <img src={Attach} alt="" className="h-5 w-5 cursor-pointer" />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" className="h-5 w-5 cursor-pointer" />
        </label>
        <button className="border-0 p-1 pl-3 pr-3 text-white bg-[#e4317b] rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

export default Input;
