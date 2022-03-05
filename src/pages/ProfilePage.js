import React from "react";
import NavBar from "../components/homepage/NavBar";
import SideBar from "../components/homepage/SideBar";
import Feed from "../components/homepage/Feed";
import RightBar from "../components/homepage/RightBar";
import Background from "../components/homepage/assets/images/background.jpg";
import DefaultAvatar from "../components/homepage/assets/images/picture.png";

const ProfilePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="w-full flex flex-row flex-wrap">
          <div className="w-full h-20 bg-green-600">
            <div className="h-80 relative">
              <img
                className="w-full h-64 object-cover"
                src={Background}
                alt="background"
              />
              <img
                className="w-40 h-40 rounded-full object-cover absolute inset-0 m-auto top-28 border-4 border-white"
                src={DefaultAvatar}
                alt="Profile"
              />
            </div>
            <div className="flex flex-column items-center justify-center -mt-6">
              <h4 className="text-2xl">Username Here</h4>
            </div>
          </div>

          <div className="flex w-full flex-grow justify-around mt-56">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
