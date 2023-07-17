import axios from "axios";

import { global } from "../_config/global";

const adminServices = {};

adminServices.getAll = async (token, page = 1) => {
  const options = {
    method: "GET",
    url: `${global.BASE_API_URL}/admin/getAll`,
    params: { page: page },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export default adminServices;
