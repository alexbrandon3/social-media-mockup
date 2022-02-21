import defaultIcon from "../assets/images/picture.png";
import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import mood from "../assets/images/me_irl.jpg";

const Post = () => {
  return (
    <div className="w-full rounded shadow-2xl">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between mt-2">
            <img
              className="w-8 h-8 rounded-2xl object-cover"
              src={defaultIcon}
              alt="poster's profile img"
            />
            <span className="text-base mr-2 ml-2 font-medium">
              Poster's Username
            </span>
            <span className="text-xs">Date/Time of Post</span>
          </div>
          <div className="flex items-center">
            <MoreVert className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-5 mb-5">
          <span className="">Felt cute. Might delete later idk</span>
          <img
            className="mt-5 max-h-96 object-contain w-full"
            src={mood}
            alt="Hey it's me!"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ThumbUp className="h-6 w-6 mr-1 cursor-pointer text-blue-700" />
            <Favorite className="h-6 w-6 mr-1 cursor-pointer text-red-500" />
            <span className="text-sm">350 people like this</span>
          </div>
          <div className="">
            <span className="text-sm cursor-pointer">45 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
