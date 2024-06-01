import React from "react";

function Message() {
  return (
    <div className="flex gap-5 flex-row-reverse">
      <div className="flex flex-col text-gray-400 font-light mb-5">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_1280.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="max-w-[80%] items-end flex flex-col gap-2 ">
        <p className="bg-[#e4317b] max-w-max text-white p-2 rounded-b-lg rounded-l-lg">
          Hello
        </p>
        <img
          className=" w-[50%]"
          src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
