const express = require("express");
const orgBus = require("./routes/org-bus");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: "100mb",
    extended: true,
  })
);
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.text({ limit: "100mb", type: "text/html" }));
app.use(bodyParser.raw({ limit: "100mb", type: "*/*" }));
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/bus", orgBus);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
