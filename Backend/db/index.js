const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/task-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("out db is connected"))
  .catch((err) => console.log(err));

console.log("connecting");
