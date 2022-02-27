import { Cake } from "@mui/icons-material";
import ad from "./assets/images/ad.png";
import { Users } from "../../dummyData";
import ProfileOnline from "./rightbar/ProfileOnline";

const ProfileRightBar = () => {
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
          {Users.map((u) => (
            <ProfileOnline key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileRightBar;
