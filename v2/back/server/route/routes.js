//Arquivo para deixar as rotas que o sistema terá

const express = require('express');
const { deletePet } = require('../data/data');
const { deleteCliente } = require('../data/clienteData');
const router = express.Router();
const service = require('../service/service');

//Rota para dizer onde o sistema vai buscar todos os livros inseridos no banco de dados,
//* o await serve para que o sistema só execute a próxima linha após terminar a execução;
router.get('/pets', async function(req, res){
    const pets = await service.getPets();
    res.json(pets);
});

//Retorno de um pet específico onde o id é o livro específico do banco de dados
router.get('/pet/:id', async function (req, res){
    const pet = await service.getPet(req.params.id);
    res.json(pet);
});

//Rota para excluir informação do banco de dado através do id passado
router.delete('/pet/:id', async function (req, res) {
    deletePet(req.params.id);
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

//Dados pelo postman é passado um json para inserir um novo livro
router.put('/pet', async function (req, res) {
    //recebe os dados pelo corpo da requisiçao
    const pet = req.body;

    //criar o novo livro e salvar na tabela e retornar ao usuário 
    const newPet = await service.savePet(pet);
    res.json(newPet);
});

//////////////////////////////////////////////Cliente///////////////////////////////////////////////

//* o await serve para que o sistema só execute a próxima linha após terminar a execução;
//Retorna todos os clientes da tabela
router.get('/clientes', async function(req, res){
    const clientes = await service.getClientes();
    res.json(clientes);
});

//Retorno de um cliente específico onde o codigo é o cliente específico do banco de dados
router.get('/cliente/:codigo', async function (req, res){
    const cliente = await service.getCliente(req.params.codigo);
    res.json(cliente);
});

//Rota para excluir informação do banco de dado através do codigo passado
router.delete('/cliente/:codigo', async function (req, res) {
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

//Dados pelo postman, lá é passado um json para inserir um novo codigo
router.put('/cliente', async function (req, res) {
    //recebe os dados pelo corpo da requisiçao
    const cliente = req.body;

    //criar o novo 'cliente' e salvar na tabela e retornar ao usuário 
    const newCliente = await service.saveCliente(cliente);
    res.json(newCliente);
});


////////////////////////////////////////////////     Pedidos  /////////////////////////////////////////

//Retorna todos os clientes da tabela
router.get('/pedidos', async function(req, res){
    const pedidos = await service.getPedidos();
    res.json(pedidos);
});

//Retorno de um cliente específico onde o codigo é o cliente específico do banco de dados
router.get('/pedido/:codigo', async function (req, res){
    const pedido = await service.getPedido(req.params.codigo);
    res.json(pedido);
});

//Rota para excluir informação do banco de dado através do codigo passado
router.delete('/pedido/:codigo', async function (req, res) {
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

//Dados pelo postman, lá é passado um json para inserir um novo codigo
router.put('/pedido', async function (req, res) {
    //recebe os dados pelo corpo da requisiçao
    const pedido = req.body;

    //criar o novo 'cliente' e salvar na tabela e retornar ao usuário 
    const newPedido = await service.savePedido(pedido);
    res.json(newPedido);
});

////////////////////////////////////////////////     Usuario  /////////////////////////////////////////

//Retorna todos os clientes da tabela
router.get('/usuarios', async function(req, res){
    const usuarios = await service.getUsuarios();
    res.json(usuarios);
});

//Retorno de um cliente específico onde o codigo é o cliente específico do banco de dados
router.get('/usuario/:codigo', async function (req, res){
    const usuario = await service.getUsuario(req.params.codigo);
    res.json(usuario);
});

//Rota para excluir informação do banco de dado através do codigo passado
router.delete('/usuario/:codigo', async function (req, res) {
    return res.json([{mesage: "registro excluído com sucesso"}]);
});


router.put('/usuario', async function (req, res) {

    const usuario = req.body;
    
    console.log(usuario);

    const newUsuario = await service.saveUsuario(usuario);
    res.json(newUsuario);
});

router.post('/login', async function(req, res){

    const usuario = req.body;
    console.log('request login');
    console.log(usuario);
    const login = await service.getLogin(usuario);
    console.log(login);

    if (login != "") {
        console.log(res.status);
        return res.status(200).json({});
    }
    else {
        console.log(res.status);
        return res.status(401).json({});
    }
});

//////////////////////////////////////////////////////////////////////

 /**
  * clienteService
  */
 const clienteService = require('../service/clienteService');
 
 /**
  * return a clientes
  */
 router.get('/clientes', async function(req, res){
     const clientes = await clienteService.getClientes();
     res.json(clientes);
 });
 
 /**
  * return a cliente by id
  */
 router.get('/cliente/:id', async function (req, res){
     const cliente = await clienteService.getCliente(req.params.id);
     res.json(cliente);
 });
 
 /**
  * delete a cliente by id
  */
 router.delete('/cliente/:id', async function (req, res) {
     deleteCliente(req.params.id);
     return res.json([{mesage: "Registro excluído com sucesso"}]);
 });
 
 /**
  * insert a cliente
  */
 router.put('/cliente', async function (req, res) {
     const cliente = req.body;
 
     const newCliente = await clienteService.saveCliente(cliente);
     res.json(newCliente);
 });



//Exportamos a rota para ser visivel em outros arquivos
module.exports = router;






