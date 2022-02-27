import ProfileShare from "./feed/ProfileShare";
import ProfilePost from "./feed/ProfilePost";
import { Posts } from "../../dummyData";

const ProfileFeed = () => {
  return (
    <div className="w-full min-w-full p-4 h-full">
      <div className="">
        <ProfileShare />
        {Posts.map((p) => (
          <ProfilePost key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default ProfileFeed;
