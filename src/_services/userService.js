import axios from "axios";

import { global } from "../_config/global";

const userService = {};

userService.getAll = async (token, page = 1) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/users`,
    params: { page: page },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

userService.getProfile = async (token) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/users/profile`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

userService.saveProfile = async (token, user) => {
  const options = {
    method: "PUT",
    url: `${global.BASE_API_URL}/users/modifyProfile`,
    data: user,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

userService.createAppoint = async (token, appointmentData) => {
  const options = {
    method: "POST",
    url: `${global.BASE_API_URL}/users/createAppoint`,
    data: appointmentData,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

userService.modifyAppointment = async (token, appointmentData) => {
  const options = {
    method: "PUT",
    url: `${global.BASE_API_URL}/users/modifyAppointment`,
    data: appointmentData,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

userService.findAppointment = async (token, appointment) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/users/findAppointment`,
    data: appointment,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

userService.cancelAppoint = async (token, appointmentId) => {
  const options = {
    method: "DELETE",
    url: `${global.BASE_API_URL}/users/cancelAppoint`,
    data: appointmentId,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export default userService;
