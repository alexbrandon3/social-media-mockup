import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const NavBar = () => {
  return (
    <div className="sticky h-12 w-full flex items-center bg-red-600">
      <div className="flex-3 flex w-2/12">
        <span className="text-2xl ml-5 font-bold text-white cursor-pointer">
          App Name
        </span>
      </div>
      <div className="flex-5 w-1/2 flex-wrap">
        <div className="w-full h-8 rounded-2xl bg-white flex align-center">
          <Search className="text-xl mt-1 ml-3" />
          <input
            className="border-transparent focus:outline-none w-9/12"
            placeholder="Search for friends, posts, or videos"
          />
        </div>
      </div>
      <div className="flex-4 flex items-center space-x-4 text-white">
        <div>
          <span className="mr-3 ml-5 text-sm cursor-pointer">Home</span>
          <span className="mr-3 text-sm cursor-pointer">Timeline</span>
        </div>
        <div className="flex ">
          <Person className="ml-4 relative cursor-pointer" />
          <span className="w-5 h-5 bg-black rounded-2xl flex items-center justify-center cursor-default">
            1
          </span>
          <Chat className="ml-4 mr-2 relative cursor-pointer" />
          <span className="w-5 h-5 bg-black rounded-2xl flex items-center justify-center cursor-default">
            2
          </span>
          <Notifications className="ml-4 relative cursor-pointer" />
          <span className="w-5 h-5 bg-black rounded-2xl flex items-center justify-center cursor-default">
            3
          </span>
        </div>
        <img
          src="../../public/assets/images/default.png"
          alt="Default"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default NavBar;