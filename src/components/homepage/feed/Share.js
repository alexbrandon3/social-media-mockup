import defaultIcon from "../assets/images/picture.png";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="w-full h-44 rounded shadow-xl">
      <div className="p-5">
        <div className="flex items-center">
          <img
            className="w-12 h-12 mr-2 rounded-full object-cover"
            src={defaultIcon}
            alt="default"
          />
          <input
            className="border-none focus:outline-none w-4/5"
            type="text"
            placeholder="Share your thoughts..."
          />
        </div>
        <hr className="m-4" />
        <div className="flex items-center justify-between sm:flex-wrap">
          <div className="flex ml-5 items-center sm:flex-wrap">
            <div className="flex align-center items-center cursor-pointer mr-5 md:h-12 sm:h-6 sm:m-2">
              <PermMedia className="mr-2 text-lg text-green-600" />
              <span className="md:text-sm font-semibold sm:text-xs">
                Photo or Video
              </span>
            </div>
            <div className="flex align-center items-center cursor-pointer mr-5 md:h-12 sm:h-6 sm:m-2">
              <Label className="mr-1 text-lg text-red-500" />
              <span className="md:text-sm font-semibold sm:text-xs">Tag</span>
            </div>
            <div className="flex align-center items-center cursor-pointer mr-5 md:h-12 sm:h-6 sm:m-2">
              <Room className="mr-1 text-lg text-blue-500" />
              <span className="md:text-sm font-semibold sm:text-xs">
                Location
              </span>
            </div>
            <div className="flex align-center items-center cursor-pointer mr-5 md:h-12 sm:h-6 sm:m-2 sm:mr-16">
              <EmojiEmotions className="mr-1 text-lg text-orange-500" />
              <span className="md:text-sm font-semibold sm:text-xs">
                Reaction
              </span>
            </div>
            <button className=" p-1 pr-4 pl-4 mr-4 border-none rounded text-sm text-white bg-purple-600 font-medium">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
