const express = require("express");
const app = express();
const cors = require("cors");

/*const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};*/
app.use(
  cors({
    origin:
      "http://localhost:3000" || "https://enchanting-tuna-costume.cyclic.app",
  })
);
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const authRoute = require("./routes/auth");

const userRoute = require("./routes/users");

const listRoute = require("./routes/lists");
const movieRoute = require("./routes/movies");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);
app.use("/api/lists", listRoute);
app.use("/api/movies", movieRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});
app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});
