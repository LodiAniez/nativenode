import {
  Endpoints,
  NobelPrizeRequestDto,
  NobelPrizeResponseDto,
} from "../../types/nobelprize.types";
import { EndpointsPaths } from "../../configs/endpoints-paths";
import { readFileSync } from "fs";

const { FindAll } = EndpointsPaths;

export const NobelPrizeEndpoints: Endpoints = {
  [FindAll]: async (payload: NobelPrizeRequestDto) => {
    try {
      const jsonFile = readFileSync(
        require.resolve("./../../json/prizes.json")
      );

      const json: NobelPrizeResponseDto = JSON.parse(jsonFile.toString());
      const { firstname, lastname, category, year } = payload;
      const response: NobelPrizeResponseDto = {
        prizes: [],
      };

      if (category) {
        response.prizes = json.prizes.filter((prize) =>
          prize.category.toLowerCase().includes(category.toLowerCase())
        );
      }

      if (year) {
        if (response.prizes.length) {
          response.prizes = response.prizes.filter(
            (prize) => parseInt(prize.year) === year
          );
        } else {
          response.prizes = json.prizes.filter(
            (prize) => parseInt(prize.year) === year
          );
        }
      }

      const filterByName = (argType: "firstname" | "surname") => {
        if (response.prizes.length) {
          response.prizes = response.prizes.filter((prize) => {
            const hasName = prize.laureates?.find((laureate) =>
              laureate[argType]
                .toLowerCase()
                .includes(
                  (argType === "firstname" ? firstname : lastname).toLowerCase()
                )
            );

            prize.laureates = prize.laureates?.filter((laureate) =>
              laureate[argType]
                .toLowerCase()
                .includes(
                  (argType === "firstname" ? firstname : lastname).toLowerCase()
                )
            );

            return hasName;
          });
        } else {
          response.prizes = json.prizes.filter((prize) => {
            const hasName = prize.laureates?.find((laureate) =>
              laureate[argType]
                .toLowerCase()
                .includes(
                  (argType === "firstname" ? firstname : lastname).toLowerCase()
                )
            );

            prize.laureates = prize.laureates?.filter((laureate) =>
              laureate[argType]
                .toLowerCase()
                .includes(
                  (argType === "firstname" ? firstname : lastname).toLowerCase()
                )
            );

            return hasName;
          });
        }
      };

      if (firstname) {
        filterByName("firstname");
      }

      if (lastname) {
        filterByName("surname");
      }

      return JSON.stringify(response);
    } catch (e) {
      console.error(e);
      return JSON.stringify({
        message: "Something went wrong, please try again later.",
      });
    }
  },
};
