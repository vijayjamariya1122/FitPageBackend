var express = require("express");
const cors = require("cors");
var app = express();
const router = require("./Router/router");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on: ${PORT}`);
});
