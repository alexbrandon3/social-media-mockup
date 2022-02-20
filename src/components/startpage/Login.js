import React from "react";

const SignUp = ({ loggingIn, setLoggingIn }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col flex-wrap mt-10 w-1/3 shadow-2xl items-center">
        <input
          className="h-14 m-2 p-1 w-4/5 rounded-md border-2 border-gray-400 text-red-700 hover:border-blue-700 hover:placeholder-blue-700"
          placeholder="email"
          type="email"
        />
        <input
          className="h-14 m-2 p-1 w-4/5 rounded-md border-2 border-gray-400 hover:border-blue-700 hover:placeholder-blue-700"
          placeholder="password"
          type="password"
        />
        <button className="h-14 m-2 p-1 w-4/5 rounded-md border-2 text-white bg-purple-700 hover:bg-purple-600">
          Login
        </button>
        <hr />
        <button
          onClick={() => setLoggingIn(!loggingIn)}
          className="h-14 m-2 p-1 w-4/5 rounded-md border-2 text-white bg-green-600 hover:bg-green-700"
        >
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
