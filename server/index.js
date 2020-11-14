import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/react/App";

const PORT = process.env.PORT || 8080;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("Not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      {'Hello World!!!'}
      <App />
    </ServerLocation>
  );

  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});
console.log(parts);
console.log(`listening on ${PORT}`);
app.listen(PORT);