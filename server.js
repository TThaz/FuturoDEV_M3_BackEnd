const http = require("node:http");

const server = http.createServer((request, response) => {
  return response.end("Hello API");
});

const port = 3333;
const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
