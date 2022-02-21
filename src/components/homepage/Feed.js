import Share from "./feed/Share";
import Post from "./feed/Post";

const Feed = () => {
  return (
    <div className="w-2/4 p-4 h-full">
      <div className="">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
