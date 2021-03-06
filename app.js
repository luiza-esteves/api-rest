const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));//mostra detalhes da rota pedida
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

app.use((req, res, next)=>{
    res.header('Acess-Control-Allow-Origin', '*');//servidores com acesso
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    ); //permissoes para utilizar o cabeçalho
    
    if(req.method=='OPTIONS'){
        res.header(
            'Acess-Control-Allow-Methods',
            'PUT, POST, DELETE, GET'
        );
        return res.status(200).send({});
    }
    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);
app.use((req, res, next)=>{
    const erro = new Error('Não encontrado');
    erro.status=404;
    next(erro);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

console.log("rodando")
module.exports = app;