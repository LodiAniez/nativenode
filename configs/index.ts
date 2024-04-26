import { config } from "dotenv";

config();

export const PORT: number = +process.env.PORT;
export const HOSTNAME: string = process.env.HOSTNAME;
