import { MoreVert, ThumbUp, Favorite } from "@mui/icons-material";
import { Users } from "../../../dummyData";

const Post = ({ post }) => {
  const user = Users.filter((u) => u.id === 1);
  console.log(user[0].username);

  return (
    <div className="w-full rounded shadow-2xl">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between mt-2">
            <img
              className="w-8 h-8 rounded-2xl object-cover"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="poster's profile img"
            />
            <span className="text-base mr-2 ml-2 font-medium">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="text-xs">{post.date}</span>
          </div>
          <div className="flex items-center">
            <MoreVert className="cursor-pointer" />
          </div>
        </div>
        <div className="mt-5 mb-5">
          <span className="">{post.desc}</span>
          <img
            className="mt-5 max-h-96 object-contain w-full"
            src={post.photo}
            alt="Images are so frustrating to work with"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ThumbUp className="h-6 w-6 mr-1 cursor-pointer text-blue-700" />
            <Favorite className="h-6 w-6 mr-1 cursor-pointer text-red-500" />
            <span className="text-sm">
              {post.like} {post.like > 1 ? "likes" : "like"}
            </span>
          </div>
          <div className="">
            <span className="text-sm cursor-pointer">
              {post.comment} {post.comment > 1 ? "comments" : "comment"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
