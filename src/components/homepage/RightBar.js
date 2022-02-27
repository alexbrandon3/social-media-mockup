import { Cake } from "@mui/icons-material";
import ad from "./assets/images/ad.png";
import defaultIcon from "./assets/images/picture.png";
import { Users } from "../../dummyData";
import Online from "./rightbar/Online";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="flex items-center">
          <Cake className="mr-2" />
          <span className="font-light">
            <b className="cursor-pointer">FriendName</b> and{" "}
            <b className="cursor-pointer">4 other friends</b> have birthdays
            today.
          </span>
        </div>
        <img
          className="w-full rounded-xl mt-7 mb-7 cursor-pointer"
          src={ad}
          alt="THAT'S a raid"
        />
        <h4 className="mb-5 font-medium text-lg">Online Friends</h4>
        <ul className="m-0 p-0">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="text-lg font-medium mb-2">User Information</h4>
        <div className="mb-7">
          <div className="mb-2">
            <span className="font-medium text-gray-500 mr-2">City:</span>
            <span className="font-light">Kyiv</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-500 mr-2">From:</span>
            <span className="font-light">Anchorage</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-500 mr-2">Relationshp:</span>
            <span className="font-light">Polyamorous</span>
          </div>
        </div>
        <h4 className="">User Friends</h4>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-column mb-5 cursor-pointer">
            <img
              className="w-24 h-24 object-cover rounded-xl"
              src={defaultIcon}
              alt="face"
            />
            <span className="">Username</span>
          </div>
          <div className="flex flex-column mb-5 cursor-pointer">
            <img
              className="w-24 h-24 object-cover rounded-xl"
              src={defaultIcon}
              alt="face"
            />
            <span className="">Username</span>
          </div>
          <div className="flex flex-column mb-5 cursor-pointer">
            <img
              className="w-24 h-24 object-cover rounded-xl"
              src={defaultIcon}
              alt="face"
            />
            <span className="">Username</span>
          </div>
          <div className="flex flex-column mb-5 cursor-pointer">
            <img
              className="w-24 h-24 object-cover rounded-xl"
              src={defaultIcon}
              alt="face"
            />
            <span className="">Username</span>
          </div>
          <div className="flex flex-column mb-5 cursor-pointer">
            <img
              className="w-24 h-24 object-cover rounded-xl"
              src={defaultIcon}
              alt="face"
            />
            <span className="">Username</span>
          </div>
          <div className="flex flex-column mb-5 cursor-pointer">
            <img
              className="w-24 h-24 object-cover rounded-xl"
              src={defaultIcon}
              alt="face"
            />
            <span className="">Username</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="w-1/4 h-full">
      <div className="pt-5 pr-5">
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default RightBar;
