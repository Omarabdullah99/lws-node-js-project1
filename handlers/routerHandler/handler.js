/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler=(requestProoerties,callback)=>{
    callback(200,{
        message:'This is a sample url'
    })

}

handler.rootHandler=(requestProoerties,callback)=>{
    callback(200,{
        message:'this is home page'
    })
}

module.exports= handler