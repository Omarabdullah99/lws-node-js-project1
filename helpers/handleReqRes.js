/*
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 01/14/2025
 *
 */


const url = require("url");
const { StringDecoder } = require("string_decoder");
const { notFoundHandler } = require("../handlers/routerHandler/notFoundHandler");
const routes = require("../routes");



//handleReqRes Object - module scaffolding
const handler={}

handler.handleReqRes=(req,res)=>{
      //get url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  //get req method(get,post,delete,put,patch)
  const method = req.method.toLowerCase();
  //get all req header
  const headerObject = req.headers;

  //------------router setup start---------
  const requestProperties = {
    parseUrl,
    path,
    trimmedPath,
    method,
    headerObject,
};

const chosenHandler= routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler

chosenHandler(requestProperties,(statusCode,payload)=>{
  statusCode= typeof(statusCode) === 'number' ? statusCode : 500
  payload= typeof(payload) === 'object' ? payload : {}
  const payloadString = JSON.stringify(payload);

  // return the final response
  res.writeHead(statusCode);
  res.end(payloadString);
})
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
 


}


module.exports= handler