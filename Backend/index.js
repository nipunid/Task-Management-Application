const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const user = require("./model/user");
const task = require("./model/task");
require("./db");

const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const app = express();

const PORT = process.env.PORT || 8005;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/apis", userRouter);
app.use("/apis", taskRouter);

app.get("/apis", userRouter);

app.all("*", (req, res) => res.send("That route doesn't exist"));

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
