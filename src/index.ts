import http, { Server } from "node:http";
import { PORT, HOSTNAME } from "../configs";
import { NobelPrizeEndpoints } from "./nobelprize";
import { NobelPrizeRequestDto } from "../types/nobelprize.types";

const server: Server = http.createServer((req, res) => {
  // Setting defaults
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  req.on("data", async (data) => {
    switch (req.method) {
      case "POST":
        const result = await NobelPrizeEndpoints[req.url]<NobelPrizeRequestDto>(
          JSON.parse(data)
        );

        res.end(result);
        break;
    }
  });
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
