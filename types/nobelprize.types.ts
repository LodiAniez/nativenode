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
