import axios from "axios";

import { global } from "../_config/global";

const userService = {};

userService.getAll = async (token, page = 1) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/user`,
    params: { page: page },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

userService.getStudents = async (token, page = 1) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/users`,
    params: { page: page },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

userService.getProfile = async (token) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/user/profile`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

userService.saveProfile = async (token, user) => {
  const options = {
    method: "PUT",
    url: `${global.BASE_API_URL}/user/profile`,
    data: user,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // await sleep(2000); // TODO
  const response = await axios.request(options);
  return response.data;
};

export default userService;
