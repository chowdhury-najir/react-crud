import Axios from "axios";
import { SERVER_URL } from "../utils/ServerUrl";

export default {
  getSanctionList: async function () {
    try {
      const response = await Axios.get(SERVER_URL + "SanctionType");
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};
