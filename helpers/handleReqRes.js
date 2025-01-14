/*
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 01/14/2025
 *
 */

//dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");

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

}


module.exports= handler