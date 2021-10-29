const http = require('http');
const users = [{name: "user001", age: "220"}, {name: "user002", age: "220"}];
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 if (req.url == "/users") {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.end(JSON.stringify(users));
 }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
