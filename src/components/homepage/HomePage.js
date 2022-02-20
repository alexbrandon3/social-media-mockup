import React, { useState } from "react";
import LoginNavbar from "./LoginNavbar";
import Login from "./Login";
import SignUp from "./Signup";

const HomePage = () => {
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

export default HomePage;
