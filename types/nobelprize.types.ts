import { EndpointsPaths } from "../configs/endpoints-paths";

export type NobelPrizeRequestDto = {
  firstname?: string;
  lastname?: string;
  category?: string;
  year?: number;
};

export type Endpoints = Record<
  EndpointsPaths,
  <T>(args?: T) => Promise<string>
>;

type Laureate = {
  id: string;
  firstname: string;
  surname: string;
  motivation: string;
  share: string;
};

export type NobelPrize = {
  year: string;
  category: string;
  laureates: Laureate[];
};

export type NobelPrizeResponseDto = {
  prizes: NobelPrize[];
};
