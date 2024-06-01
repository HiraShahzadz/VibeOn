import React from "react";

const Chats = () => {
  return (
    <div>
      <div className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#e4317b]">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_1280.jpg"
          alt=""
        />
        <div>
          <span className="text-lg font-medium">Jane</span>
          <p className="text-sm text-[#cbcbcb]">Hello</p>
        </div>
      </div>
      <div className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#e4317b]">
        <img
          className="w-12 h-12  rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_1280.jpg"
          alt=""
        />
        <div>
          <span className="text-lg font-medium">Jane</span>
          <p className="text-sm text-[#cbcbcb]">Hello</p>
        </div>
      </div>
      <div className="p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#e4317b]">
        <img
          className="w-12 h-12  rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_1280.jpg"
          alt=""
        />
        <div>
          <span className="text-lg font-medium">Jane</span>
          <p className="text-sm text-[#cbcbcb]">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
