const express = require('express');
const { getUserByPk, getAllUsers } = require('./helpers');

const users = express.Router();

// Rutas para movimientos
users.get('/echo', async (req, res) => {
    res.status(200).send({text: "Mi nombre es movimientos"});
});

users.get('/', async (req, res) => { // Obtener todos los usuarios
    try{
        const response = await getAllUsers();
        res.status(200).send(response);
    }catch (e){
        res.status(400).send({error: e});
    }
});

users.get('/:user_id', async (req, res) => { // Obtener usuario por id
    let { user_id } = req.params;

    try{
        const response = await getUserByPk(user_id);
        res.status(200).send(response);
    }catch (e){
        res.status(400).send({error: e});
    }
});

module.exports = users;
