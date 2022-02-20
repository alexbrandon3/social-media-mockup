import React, { useState } from "react";
import LoginNavbar from "../components/startpage/LoginNavbar";
import Login from "../components/startpage/Login";
import SignUp from "../components/startpage/Signup";

const StartPage = () => {
  const [loggingIn, setLoggingIn] = useState(true);
  return (
    <div>
      <LoginNavbar />
      {loggingIn === true ? (
        <Login loggingIn={loggingIn} setLoggingIn={setLoggingIn} />
      ) : (
        <SignUp />
      )}
    </div>
  );
};

export default StartPage;
