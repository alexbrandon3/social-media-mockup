import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import defaultIcon from "./assets/images/picture.png";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 h-12 w-full flex items-center bg-purple-600">
      <div className="flex-3 flex w-2/12">
        <span className="md:text-2xl sm:text-lg ml-5 font-bold text-white cursor-pointer">
          App Name
        </span>
      </div>
      <div className="flex-5 w-1/2 flex-wrap">
        <div className="w-full h-8 rounded-2xl bg-white flex align-center">
          <Search className="text-xl mt-1 ml-3" />
          <input
            className="border-none focus:outline-none md:w-9/12 sm:w-full"
            placeholder="Search for friends, posts, or videos"
          />
        </div>
      </div>
      <div className="flex-4 flex items-center space-x-4 text-white">
        <div>
          <span className="mr-3 ml-5 text-sm cursor-pointer">Home</span>
          <span className="mr-3 text-sm cursor-pointer">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src={defaultIcon}
          alt={"Default"}
          className="w-8 h-8 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default NavBar;
