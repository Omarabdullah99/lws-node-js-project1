/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");
const { buffer } = require("stream/consumers");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.hadnlereqres);
  server.listen(app.config.port, () => {
    console.log(`server port is running ${app.config.port}`);
  });
};

// handle Request Response
app.hadnlereqres = (req, res) => {
  //get url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  //get req method(get,post,delete,put,patch)
  const method = req.method.toLowerCase();
  //get all req header
  const headerObject = req.headers;
  //req body or req payload
  const decoder = new StringDecoder("utf-8");
  let realdata = "";
  req.on("data", (buffer) => {
    realdata += decoder.write(buffer);
  });
  req.on("end", () => {
    realdata += decoder.end();
    console.log(realdata);
  });
  res.end("hello wrold");
};

//start the server
app.createServer();
