import { Cake } from "@mui/icons-material";
import ad from "./assets/images/ad.png";
import defaultIcon from "./assets/images/picture.png";

const RightBar = () => {
  return (
    <div className="w-1/4 h-full">
      <div className="pt-5 pr-5">
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
          <li className="flex items-center mb-4">
            <div className="mr-2 flex items-center">
              <span className="h-3 w-3 mr-2 rounded-2xl bg-green-600"></span>
              <img
                className="w-10 h-10 object-cover rounded-2xl cursor-pointer"
                src={defaultIcon}
                alt="friend"
              />
            </div>
            <span className="font-medium cursor-pointer">User Name</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
