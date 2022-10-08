const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      // We created a form that has a input and a button. The type="submit" on the button will submit the form and send a new request. The form's action will send you to that url, in this case its /message
      // and the method="POST" is when you request POST and this is when you set a request. GET is when you click on a URL or visit a website
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    // console.log("Checking if url is === to /");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = []; // Create an empty array which will take in all chunks
    req.on("data", (chunk) => {
      // Listens for events and grabs chunks from that data
      // console.log(chunk);
      // console.log("Checking if /message and the method is POST");
      body.push(chunk); // Pushes the chunks into the body array
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // Creates a buffer(a place where lots of chunks are), adds all the chunks, and then turns it into a string
      // console.log(parsedBody); // logs message=dsdsds
      const message = parsedBody.split("=")[1]; // We split the parsedBody into an array and only make message = to the actual message data from the input tag
      // console.log(parsedBody.split("="));
      // console.log("Creating a buffer and parsing the body");
      fs.writeFile("message.txt", message, (err) => {
        // We check if the url is "/message" which on line 26, we did that with the form action="/message"
        // Here we will create a file(message.txt) with text in it when redirected
        res.statusCode = 302; // 302 stands for redirection
        res.setHeader("Location", "/"); // This sets the location to /
        // console.log("Writing message to file");
        return res.end();
      }); // Here we create a new file called message.txt with the message from our input tag inside of that file
    });
  }
  res.setHeader("Content-Type", "text/html"); // We set the response header's to "Content-Type" and set the key of the header to text/html
  // Here we use the write method to write down html code
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js</h1></body>");
  res.write("</html>");
  res.end(); // The .end method makes it so you end the response data, this tells it to send the response
};

// module.exports = requestHandler; // Exports our requestHandler function
module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text",
};
// You cant access objects exported to other files. For example you cant add another variable to an object that was exported
