export const saveAccessTokenToLocalStorage = (token: any) => {
  localStorage.setItem("accessToken", token);
};

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem("accessToken");
};
