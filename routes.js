/*
 * Title: Routes
 * Description: Application Routes
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */



//dependencies
const { sampleHandler, rootHandler } = require("./handlers/routerHandler/handler");

const routes={
    '':rootHandler,
    'sample':sampleHandler
}

module.exports= routes
