import axios from "axios";
const rootUrl = "http://localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJwtUrl = rootUrl + "token";
export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(loginUrl, frmData);
      resolve(result.data);
      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
        localStorage.setItem(
          "stockManager",
          JSON.stringify({ refreshJWT: result.data.refreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const getUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found");
      }
      const result = await axios.get(userProfileUrl, {
        headers: { Authorization: accessJWT },
      });
      resolve(result.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};
export const getNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("stockManager"));
     
      if (!refreshJWT) {
        reject("Token not found");
      }
      const result = await axios.get(newAccessJwtUrl, {
        headers: { Authorization: refreshJWT },
      });
      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
      }
      resolve(true);
    } catch (error) {
      if(error.message==='Request failed with status code 403'){
        localStorage.removeItem('stockManager')
      }
      reject(false);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
