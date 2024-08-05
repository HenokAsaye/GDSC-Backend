const http = require("http")
const router = require("./router/router")
const logger = require("./middlewares/logger")
const error = require("./middlewares/errorhandler")
const handler = require("./handler")

let port = 3000; 
const middlewares  = [logger,router,error]
let server = http.createServer((req,res)=>{
    handler(req,res,middlewares)
})

server.listen(port,(req,res)=>{
    console.log(`server is listening on the ${port}`)
})