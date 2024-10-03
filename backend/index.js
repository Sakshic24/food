const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require("./db");

//Better code writing practice
// const userRouter = require("./Routes/CreateUser");
mongoDB();

//Due to this you getting error because you are not using this middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Sakshi Code
app.use("/api", require("./Routes/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
