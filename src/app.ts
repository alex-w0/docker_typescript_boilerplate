var express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

let app = express();

app.get("/", function(req: any, res: any) {
  res.send("Hello World");
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
