const express = require("express");
const app = express();

const { userRouter, showRouter } = require("./routes");

app.use(express.json());
app.use("/user", userRouter);
app.use("/shows", showRouter);

app.listen(5001);
