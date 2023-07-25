import axios from "axios";

import { global } from "../_config/global";

const doctorServices = {};

doctorServices.doctorAppoinment = async (token, appointment) => {
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

export default doctorServices;
