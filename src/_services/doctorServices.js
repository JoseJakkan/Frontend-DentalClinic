import axios from "axios";

import { global } from "../_config/global";

const docService = {};

docService.getPatients = async (token, page = 1) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/doctor/findPatient`,
    params: { page: page },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

docService.getDocApoo = async (token, appointment) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/doctor/doctorAppoinment`,
    data: appointment,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export default docService;
