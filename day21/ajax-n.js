//引入http服务
let http=require("http");
//创建服务器
http.createServer((req,res)=>{
    console.log(req.url);
    res.end()
}).listen("8181","localhost",()=>{
    console.log("开启成功")
})
