const http = require("http"); // Imports a core module

const server = http.createServer((req, res) => {
  // Creates a server taking in the arguments req and res
  const url = req.url; // Grab the URL
  const method = req.method; // Grab the Method
  if (url === "/") {
    // If the url is / then set a header and write a input form with a button that takes in text
    res.setHeader("Content-type", "text/html");
    res.write(
      '<html><p>Hello!</p><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></html>'
    );
    return res.end(); // We do res.end since we wont write anymore html afterwards
  }

  if (url === "/users") {
    // If the url is /users then set a header and write an unordered list with users inside
    res.setHeader("Content-type", "text/html");
    res.write(
      "<html><ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li><li>User5</li></ul></html>"
    );
    return res.end(); // We do res.end since we wont write anymore html afterwards
  }

  if (url === "/create-user" && method === "POST") {
    // Checks if the url is /create-user and the method is "POST"
    const body = []; // Creates a body array
    req.on("data", (chunk) => {
      // Takes in the data chunks and pushes it into body
      body.push(chunk);
    });
    req.on("end", () => {
      // After its done pushing the chunks, it buffers it and grabs the text from the form in the url / and logs it
      const username = Buffer.concat(body).toString().split("=")[1];
      console.log(username);
    });
    res.statusCode = 302; // Redirect status code
    res.setHeader("Location", "/"); // Redirects to a new location with the url of /
    res.end(); // Ends the response
  }
});

server.listen(3000); // Listens to requests with a port of 3000
