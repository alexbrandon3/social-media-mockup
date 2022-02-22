import Share from "./feed/Share";
import Post from "./feed/Post";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="w-2/4 p-4 h-full">
      <div className="">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
