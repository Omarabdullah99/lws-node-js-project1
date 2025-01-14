/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Omar Abdullah
 * Date: 01/14/2025
 *
 */

// dependencies
const http = require("http");
const url = require("url");
const { buffer } = require("stream/consumers");
const handler = require("./helpers/handleReqRes");

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
app.hadnlereqres = handler.handleReqRes

//start the server
app.createServer();
