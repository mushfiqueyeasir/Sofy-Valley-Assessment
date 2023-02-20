import moment from "moment";

export const getToken = () => {
  const token = sessionStorage.getItem("softValleyToken")
    ? sessionStorage.getItem("softValleyToken")
    : "";

  return token;
};
