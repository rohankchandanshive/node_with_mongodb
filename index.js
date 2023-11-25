const express = require('express');
const http = require('http');
const server = http.createServer((req,res)=>{
    return res.end("hello world");
})

server.listen(3000);