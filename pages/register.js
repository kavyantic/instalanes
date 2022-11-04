import React from "react";
import SignUp from "../components/auth/SignUp";

export default function signup() {
  const handleFormSubmit = (e) => {
    const email = e.target.email;
    const name = e.target.name;
  };

  return <SignUp formTitle="Sign Up" onSubmit={handleFormSubmit} />;
}
