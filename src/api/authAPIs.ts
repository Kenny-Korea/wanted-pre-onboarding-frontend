import { BASE_URL } from "../constants/globalVariables";
import { saveAccessTokenToLocalStorage } from "../utils/accessTokenHandler";

export const signInUser = async (args: any) => {
  const signInRes = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  if (signInRes.ok) {
    const signInResData = await signInRes.json();
    saveAccessTokenToLocalStorage(signInResData.access_token);
    return "success";
  } else {
    return "fail";
  }
};

export const signUpUser = async (userInfo: any) => {
  console.log(JSON.stringify(userInfo));
  const signUpRes = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return signUpRes.ok ? "success" : "fail";
};
