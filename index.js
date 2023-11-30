/*const http = require ('http');
const hostname = '127.0.0.1';
const port = 5500;
const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content.Type','text/plain');
    res.end('Olá da Danki Code!');
})

server.listen(port,hostname, ()=>{
    console.log('Servidor rodando');
})*/
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/cadastro',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/cadastro.html'))
})
router.get('/cadastroConfig',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/cadastroConfig.html'))
})
router.get('/chat',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/chat.html'))
})
router.get('/compras',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/compras.html'))
})
router.get('/configuracao',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/configuracao.html'))
})
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/login.html'))
})
router.get('/notificacao',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/notificacao.html'))
})
router.get('/perfilArtista',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/perfilArtista.html'))
})
router.get('/pesquisar',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/pesquisar.html'))
})
router.get('/principal',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/principal.html'))
})
router.get('/perfilArtista',function(req,res){
    res.sendFile(path.join(__dirname+'/SRC/VIEW/perfilArtista.html'))
})

app.use('/',router);
app.listen(process.env.port || 3000);

app.use(express.static(__dirname + '/PUBLIC')); 
app.use(express.static(__dirname + '/PUBLIC/CSS'));
app.use(express.static(__dirname + '/PUBLIC/JS'));
app.use(express.static(__dirname + '/PUBLIC/IMG'));