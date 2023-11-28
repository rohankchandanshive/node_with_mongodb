const express = require('express');
// const logger = require('logger').createLogger()
const app = express();
const User = require("./models/User");
const { UserController } = require("./controller/userCtrl");
const { departmentRouter } = require('./routers/department');

app.use(express.json())

let users = [
    {
        name: "Rohan",
        industry: "ID"
    },
    // {
    //     name: "Sheetal",
    //     industry: "Music"
    // },
    // {
    //     name: "Anna",
    //     industry: "Marketing"
    // },
    // {
    //     name: "John",
    //     industry: "Dance"
    // }
]

const user = new User({
    name: "sheetal Mane",
    industry: "ID"
});

app.get("/",(req,res) => {
    console.log("Welcome for MongoDB Example Application !")
    res.send(user);
});

app.get("/api/users",async(req,res) => {
    console.info(">> Get users called");
    try{
        const result = await User.find();
        console.log("result",result);
        if(result.length === 0){
           return res.status(201).json({error: "No data found!", status: "201"}).end();
        }
        res.json(result);
    }catch(err){
        console.error("Error in getting users",err.message);
        res.status(500).json({error: err.message, status: "500"})
    }
    // res.send(users);
});


app.post("/api/user",async(req,res) => {
    console.info(">> Post users called");

    console.log("body",req.body, Array.isArray(req.body));
    let user = []
    try{
        if(Array.isArray(req.body)){
            
            user = await req.body.map((user) => {
                return UserController.createUser(user);
            })
            console.log("user", user);

            res.json(user);

        } else {
            console.log("created user");
            res.json(await UserController.createUser(req.body));
        }
    } catch(err){
        console.error("Error while adding user",err.message);
        res.status(500).json({error: err.message, status: "500"})
    }
})


app.put("/api/user/:id",async(req,res) => {
    console.info(">> Put users called",req.params.id);
    try{
        const userId = req.params.id
        const result = await UserController.updateUser(userId,req.body)
        if(!result){
            res.status("404").json({error: err.message, status: "404"});
            return
        }
        res.status(200).json(result);    
    } catch(err){
        console.error("Error while adding user",err.message);
        res.status(500).json({error: err.message, status: "500"})
    }
})


app.patch("/api/user/:id",async(req,res) => {
    console.info(">> Patch users called");
    try{
        const userId = req.params.id
        const result = await UserController.patchUser(userId,req.body)
        if(!result){
            res.status("404").json({error: err.message, status: "404"});
            return
        }
        res.status(200).json(result);    
    } catch(err){
        console.error("Error while adding user",err.message);
        res.status(500).json({error: err.message, status: "500"})
    }
})

app.patch("/api/order/:id",async(req,res) => {
    console.info(">> Patch order called");
    try{
        const orderId = req.params.id
        const result = await UserController.patchOrder(orderId,req.body)
        if(!result){
            res.status("404").json({error: err.message, status: "404"});
            return
        }
        res.status(200).json(result);    
    } catch(err){
        console.error("Error while adding order",err.message);
        res.status(500).json({error: err.message, status: "500"})
    }
})


app.post("/api/users",(req,res) => {
    res.redirect(307,"/api/user")
})


app.use("/", departmentRouter);



module.exports = app;