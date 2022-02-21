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
        <div className="flex items-center justify-between">
          <div className="flex ml-5">
            <div className="flex align-center items-center mr-16 cursor-pointer">
              <PermMedia className="mr-2 text-lg text-green-600" />
              <span className="w-14 text-sm">Photo or Video</span>
            </div>
            <div className="flex align-center items-center mr-16 cursor-pointer">
              <Label className="mr-1 text-lg text-red-500" />
              <span className="w-14 text-sm">Tag</span>
            </div>
            <div className="flex align-center items-center mr-16 cursor-pointer">
              <Room className="mr-1 text-lg text-blue-500" />
              <span className="w-14 text-sm">Location</span>
            </div>
            <div className="flex align-center items-center mr-16 cursor-pointer">
              <EmojiEmotions className="mr-1 text-lg text-orange-500" />
              <span className="w-14 text-sm">Reaction</span>
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
