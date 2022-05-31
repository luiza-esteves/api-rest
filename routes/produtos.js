const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando get dentro da rota de produtos'
    });
});

router.post('/', (req, res, next) =>{
    const produto ={
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Usando o post na rota de produtos',
        produtoCriado: produto
    });
});


router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto

    if(id == 'especial'){
        res.status(200).send({
            mensagem: 'Id especial',
            id:id
        });
    }else{
        res.status(200).send({
            mensagem: 'Você passou um id',
            id:id
        });
    }
    
});

router.patch('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o patch na rota de produtos'
    });
});

router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o delete na rota de produtos'
    });
});
module.exports = router;