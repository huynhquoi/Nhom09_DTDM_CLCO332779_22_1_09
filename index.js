var express =require("express");
var path =require("path");
var bodyParser = require("body-parser");
var compiler = require("compilex");

var app= express();
app.use(bodyParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

var option = { stats: true};
compiler.init(option);
app.get("/",function(req,res) 
{
    res.sendfile(__dirname+ "/index.html");
});
app.get("/test", function(req,res){
    return res.json("home");
});
app.post("/compilecode", function (req,res) 
{
    var code =req.body.code;
    var input =req.body.input;
    var inputRadio=req.body.inputRadio;
    var lang =req.body.lang;
    
    if(lang==="C" || lang==="C++") 
    {
        console.log(code)
        if (inputRadio==="true")
        {
            var envData = {OS: "linux", cmd:"g++", options:{timeout: 10000}};
            compiler.compileCPPWithInput(envData,code,input,function(data)
            {
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    //res.send(data.output);
                    console.log(data.output.toString());
                    return res.json(data.output.toString());
                }
            });
        }
        else 
        {
            var envData = {OS: "linux", cmd:"g++", options:{timeout: 10000}};
            compiler.compileCPP(envData,code,function(data){
                //res.send(data);
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    console.log(data.output.toString());
                    return res.json(data.output.toString());
                }
            });
        }
        
    }  
    if(lang === "Python")
    {
        console.log(code)
        if(inputRadio==="true")
        {
            var envData={OS:"linux"};
            compiler.compilePythonWithInput(envData, code, input,function(data) 
            {
                //res.send(data);
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    //res.send(data.output);
                    console.log(data.toString());
                    return res.json(data.toString());
                }
            });
        }
        else
        {
            var envData={OS:"linux"};
            compiler.compilePython(envData, code,function(data) 
            {
                //res.send(data);
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    //res.send(data.output);
                    console.log(data.output.toString());
                    return res.json(data.output.toString());
                }
            });
        }
    }
    if(lang === "Java")
    {
        if(inputRadio==="true")
        {
            var envData = { OS : "linux"};            
            compiler.compileJavaWithInput( envData , code , input ,  function(data){
                //res.send(data);
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    //res.send(data.output);
                    console.log(data.output.toString());
                    return res.json(data.output.toString());
                }
            });
        }
        else
        {
            
            var envData = { OS : "linux"};            
            compiler.compileJava( envData , code , function(data){
                //res.send(data);
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    //res.send(data.output);
                    console.log(data.output.toString());
                    return res.json(data.output.toString());
                }
            });  
        }
    }
    if(lang === "C#")
    {
        if(inputRadio==="true")
        {
            var envData = { OS : "linux"}; 
            compiler.compileCSWithInput( envData , code , input ,  function(data){
                //res.send(data);
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    //res.send(data.output);
                    console.log(data.output.toString());
                    return res.json(data.output.toString());
                }      
            });
        }
        else
        {
            var envData = { OS : "linux"};    
            compiler.compileCS( envData , code , function(data){
                //res.send(data);
                if(data.error) {
                    //res.send(data.error);console.log(data.error.toString())
                    console.log(data.error.toString());
                    return res.json(data.error.toString());
                }
                else {
                    //res.send(data.output);
                    console.log(data.output.toString());
                    return res.json(data.output.toString());
                }
            });   
        }
    }
});
app.get("/fullStat", function(req,res)
{
    compiler.fullStat(function(data)
    {
        res.send(data);
    });
});
app.listen(8000);
compiler.flush(function()
{
    console.log("All temporary files flush !");
});