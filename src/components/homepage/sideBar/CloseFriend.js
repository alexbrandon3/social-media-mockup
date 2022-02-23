const CloseFriend = ({ user }) => {
  return (
    <li className="flex items-center mb-4">
      <img
        className="w-8 h-8 mr-2 rounded-2xl object-cover"
        src={user.profilePicture}
        alt="avatar"
      />
      <span className="">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
