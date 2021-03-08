const os = require("os");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000");

const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");

//const files = fs.readdirSync("./");
//console.log(files);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log("Total Memory: " + totalMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);
