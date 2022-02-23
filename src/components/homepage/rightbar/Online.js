const Online = ({ user }) => {
  return (
    <li className="flex items-center mb-4">
      <div className="mr-2 flex items-center">
        <span className="h-3 w-3 mr-2 rounded-2xl bg-green-600"></span>
        <img
          className="w-10 h-10 object-cover rounded-2xl cursor-pointer"
          src={user.profilePicture}
          alt="friend"
        />
      </div>
      <span className="font-medium cursor-pointer">{user.username}</span>
    </li>
  );
};

export default Online;
