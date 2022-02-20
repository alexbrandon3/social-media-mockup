import React from "react";
import LoginNavbar from "./LoginNavbar";
import Login from "./Login";
import SignUp from "./Signup";

const HomePage = () => {
  return (
    <div>
      <LoginNavbar />
      <Login />
      <SignUp />
    </div>
  );
};

export default HomePage;
