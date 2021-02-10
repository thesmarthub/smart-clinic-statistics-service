const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/dist"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

console.log("Starting the app!");

app.listen(process.env.PORT || 3333, console.log("Starts Server is running"));
