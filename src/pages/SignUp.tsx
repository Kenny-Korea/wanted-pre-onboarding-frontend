import React, { useState } from "react";
import { signUpUser } from "../api/authAPIs";

// TODO. 회원가입 조건
// 이메일 조건: @ 포함
// 비밀번호 조건: 8자 이상
const SignUp = () => {
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if ((e.currentTarget[1] as HTMLInputElement).value.length < 8) {
    //   return setDisabled(true);
    // }
    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;
    signUpUser({ email, password });
  };

  return (
    <>
      <h1>SignUp</h1>
      <div className="card">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">
            Email
            <input
              data-testid="email-input"
              id="email"
              className="input"
              type="email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              data-testid="password-input"
              id="password"
              className="input"
              type="password"
            />
          </label>
          <button
            data-testid="signup-button"
            className="submitButton"
            // disabled={disabled}
          >
            회원가입
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
