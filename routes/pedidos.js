const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Todos os pedidos'
    });
});

router.post('/', (req, res, next) =>{
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'Pedido criado',
        pedidoCriado: pedido
    });
});


router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto

  
        res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id:id
        });
    
    
});


router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Pedido excluido'
    });
});
module.exports = router;