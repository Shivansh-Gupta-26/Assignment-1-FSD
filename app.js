const http = require("http");

const PORT = process.env.PORT || 3000;
const DATABASE_NAME = process.env.DATABASE_NAME;
const APP_MODE = process.env.APP_MODE;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running....");
});

server.listen(PORT, () => {
    console.log("Server started successfully");
    console.log("PORT:", PORT);
    console.log("DATABASE_NAME:", DATABASE_NAME);
    console.log("APP_MODE:", APP_MODE);
});


// This is my Output:-

// PS C:\Users\shiva\Projects\Node\Assignment\Assignment-1-FSD> node --env-file=.env app.js
// Server started successfully
// PORT: 5000
// DATABASE_NAME: collegeDB
// APP_MODE: development


// ### Theory

// Environment variables are used to store configuration values outside the source code. In Node.js, we can access these variables using the built-in `process.env` object.

// For example, `PORT`, `DATABASE_NAME`, and `APP_MODE` can be stored as environment variables and accessed using `process.env.PORT`, `process.env.DATABASE_NAME`, and `process.env.APP_MODE`.

// Hardcoding these values directly in the source code is not a good practice because configuration may change for different environments such as development and production. It can also expose sensitive information like database credentials. Using environment variables makes the application more flexible, secure, and easier to maintain.