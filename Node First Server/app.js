// Node.JS Core Modules:
// - http: Launch a server, send requests
// - https: Launch a SSL server (All data is encrypted)
// - fs
// - path
// - os

// *You can use require to import js files or paths to one of your files*
const http = require("http"); // Imports the http module

const routes = require("./routes"); // Imports our routes.js file

console.log(routes.someText);

const server = http.createServer(routes.handler);

// This is an example of an event loop, it continues to listen for events(requests)
// const server = http.createServer((req, res) => {
//   // We create a server that takes in 2 arugments, the requests, and the response
//   // console.log(req); // We log the requests coming in
//   // console.log(req.url, req.method, req.headers); // Logs the URL, the method used, and the headers
//   // process.exit() -> This would stop the event loop so it would stop taking in requests after the console.log(req), it would exit the event loop
// });

server.listen(3000); // We make the server continue listening at all times and give it a port of 3000

// NodeJs event loop order of operations:
// - Timers: Execute setTimeout, setInterval Callbacks
// - Pending Callbacks: Exectute I/O-related Callbacks that were deferred
// - Idle, Ignore:
// - Poll: Retrieve new I/O events, execute their callbacks
// - Check: Execute setImmediate() callbacks
// - Close Callbacks: Execute all 'close' event callbacks
