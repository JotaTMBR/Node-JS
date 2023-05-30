// importação do módulo express
const express = require("express");

// instânciando o express como app
const app = express();

// definir que o express deve lidar com conteúdos em json
/**
 *  JSON -> JS(JavaScript) O(On) N(Notation)
 *  é uma notação em javascript, ou seja, ema forma estruturada
 *  de transitar com os dados, enviando para o servidor ou para 
 *  o usuário. É uma forma de trocar dados entre cliente-servidor
 *  usando objetos javascript. Ex.:
 *      lstProdutos:[
 *          {
 *              id:51,
 *              nome:"Mouse"
 *          },
 *          {
 *              id:52,
 *              nome:"Sofá"
 *          }
 *      ]
 */
app.use(express.json());
app.use(coletarDados);//usando o middelware
// Vamos criar a primeira rota com a solicitação get
app.get("/",(req,res)=>{
    // Responder ao usuário passando o status code e a mensagem
    res.status(200).send("Olá, você está na rota Raiz");
});

app.get("/clientes/listar",(req,res)=>{
    res.status(200).send(["Marcos","Sofia","Theo"]);
});
app.post("/clientes/cadastrar",(req,res)=>{
    res.status(201).send({rs:"Veja ps dados enviados",dados:req.body});
});

function coletarDados(req,res,next){
    console.log(req);
    next();
}



app.listen(5028,()=>console.log("http://127.0.0.1:5028"));