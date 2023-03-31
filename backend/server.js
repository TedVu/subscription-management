const express = require("express");
const moment = require("moment");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/test", (req, res) => {
  res.json([
    {
      title: "Youtube",
      date: moment("02-02-2023").format("DD-MM-YYYY"),
      imageUrl: "",
    },
    {
      title: "Twitch",
      date: moment("02-02-2023").format("DD-MM-YYYY"),
      imageUrl: "",
    },
    {
      title: "Twitch",
      date: moment("02-02-2023").format("DD-MM-YYYY"),
      imageUrl: "",
    },
  ]);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
