import api from "./config";

export const getProfile = async () => {
  const response = api.get("users/profile", {
    headers: {
      toke: localStorage.getItem("token"),
    },
  });
  return response;
};
