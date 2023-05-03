const http=require('http');

const fs = require("fs")

function readandserve(path){
    return fs.readFileSync(path,"utf-8")

}



const port = 3000

const server = http.createServer((req,res)=>{

    url = req.url
    method = req.method

    console.log(req,method)

    if (url === "/" && method ==="GET"){
        let data = readandserve("./main.html")

        res.end(data)
    }
    else if( url === "/login"&& method === "POST"){
        res.end("hehe")
    }

    else{
        res.end("no such page exist")
    }
   

    // if(req.url === "/"){
    //     fs.readFile("./main.html",(err,data)=>{

    //         if (err){
    //             console.log("err")
    //         }
    //         else{
    //             res.end(data)
    //         }
    //     })
    // }
})

server.listen(port,()=>{
    console.log(`server running at ${port}`)
})

