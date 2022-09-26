const Express = require("express");
const path = require("path");
const cors = require("cors");
const Mongoose = require("mongoose");
const dburl = "mongodb://localhost:27017/pocketGuard"; //using for user

// const dburl = "mongodb+srv://dhanupandey:test12345@cluster0.s2usivc.mongodb.net/?retryWrites=true&w=majority"
const server = Express();

const Port = 5050;


server.use(Express.json()); // middleware for json
//server.use(Express.static(path.resolve(__dirname,"./build")))
const corsOptions = {
  exposedHeaders: "Authorization",
};
server.use(cors(corsOptions));
//server.use(cors)
server.use("/user", require("./user"));
server.use("/admin", require("./admin"));

server.listen(Port, function () {
  // here the function is a callback function
  Mongoose.connect(dburl, function (error, client) {
    if (error) {
      console.log("Error in connecting to database", error);
    } else {
      console.log("Connected to database");
    }
  });
  console.log("Port is listening ", Port);
});
