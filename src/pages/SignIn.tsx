import React from "react";
import { signInUser } from "../api/authAPIs";

const SignIn = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    signInUser({ email, password });
  };
  return (
    <>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <input data-testid="email-input" />
        <input data-testid="password-input" />
        <button data-testid="signin-button">회원가입</button>
      </form>
    </>
  );
};

export default SignIn;
