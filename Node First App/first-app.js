// NodeJS is a JS Runtime, you can use it for more than just Server-side Code, it can be used for Utility Scripts, Build Tools..

// You use Node.js :
// - Run Server (Create Server & Listen to Incoming Requests)
// - Run Business Logic(Handle Requests, Validate Input, Connect to Database)
// - Reponses (Return Responses(Rendered HTML, JSON...))

const fs = require("fs"); // Import the "fs" MODULE | "fs(File System)" is a nodejs core MODULE

fs.writeFileSync("hello.txt", "Hello from Node.js"); // Uses the "writeFileSync" METHOD

// Execute Files vs. Using the REPL
// - Execute Files already has all the code stored so you dont need to rewrite anything. Good for real apps!
// - REPL is a great playground where you can execute code as you write it.
