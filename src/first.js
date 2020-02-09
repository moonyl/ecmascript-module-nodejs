import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.get("/", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    res.send(`Salt: ${salt}`);
    // bcrypt.hash("test", salt, err, hash => {
    //   res.send(`hash: ${hash}`);
    // });
  });
  //res.send("Hello World");
});

export default app;
