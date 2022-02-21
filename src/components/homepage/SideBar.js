import {
  RssFeed,
  Forum,
  OndemandVideo,
  Groups,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import defaultIcon from "./assets/images/picture.png";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="w-1/4 h-full overflow-y-scroll scrollbar-track-gray-100 scrollbar-thumb-gray-400">
      <div className="p-5">
        <ul className="p-0 m-0 list-none">
          <li className="flex items-center mb-5">
            <RssFeed className="mr-3" />
            <span className="">Feed</span>
          </li>
          <li className="flex items-center mb-5">
            <Forum className="mr-3" />
            <span className="">Chat</span>
          </li>
          <li className="flex items-center mb-5">
            <OndemandVideo className="mr-3" />
            <span className="">Videos</span>
          </li>
          <li className="flex items-center mb-5">
            <Groups className="mr-3" />
            <span className="">Groups</span>
          </li>
          <li className="flex items-center mb-5">
            <Bookmark className="mr-3" />
            <span className="">Bookmarks</span>
          </li>
          <li className="flex items-center mb-5">
            <HelpOutline className="mr-3" />
            <span className="">Questions</span>
          </li>
          <li className="flex items-center mb-5">
            <WorkOutline className="mr-3" />
            <span className="">Jobs</span>
          </li>
          <li className="flex items-center mb-5">
            <Event className="mr-3" />
            <span className="">Events</span>
          </li>
          <li className="flex items-center mb-5">
            <School className="mr-3" />
            <span className="">Courses</span>
          </li>
        </ul>
        <button className="w-36 h-10 border-none rounded bg-gray-200">
          Show More
        </button>
        <hr className="mt-5 mb-5" />
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
        <ul>
          <li className="flex items-center mb-4">
            <img
              className="w-8 h-8 mr-2 rounded-2xl object-cover"
              src={defaultIcon}
              alt="avatar"
            />
            <span className="">User Coming Soon</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
