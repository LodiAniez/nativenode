import axios from "axios";
import { Endpoints, NobelPrizeRequestDto } from "../../types/nobelprize.types";
import { EndpointsPaths } from "../../configs/endpoints-paths";

const { FindAll } = EndpointsPaths;

export const NobelPrizeEndpoints: Endpoints = {
  [FindAll]: async (payload: NobelPrizeRequestDto) => {
    try {
      const { firstname, lastname, category, year } = payload;

      const api = "http://api.nobelprize.org/v1/prize.json?";
      const params = [];

      if (category) {
        params.push(`category=${category}`);
      }

      if (firstname) {
        params.push(`firstname=${firstname}`);
      }

      if (lastname) {
        params.push(`surname=${lastname}`);
      }

      if (year) {
        params.push(`year=${year}`);
      }

      const request = `${api}${params.length ? params.join("&") : ""}`;
      const res = await axios.get(request);

      return JSON.stringify(res.data);
    } catch (e) {
      console.error(e);
      return JSON.stringify({
        message: "Something went wrong, please try again later.",
      });
    }
  },
};
