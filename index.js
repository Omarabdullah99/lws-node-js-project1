/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */

// dependencies
const http= require('http')

// app object - module scaffolding
const app={}

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer=()=>{
    const server= http.createServer(app.hadnlereqres)
    server.listen(app.config.port,()=>{
        console.log(`server port is running ${app.config.port}`)
    })
}

// handle Request Response
app.hadnlereqres=(req,res)=>{
    res.end("hello wrold")
}

//start the server
app.createServer()