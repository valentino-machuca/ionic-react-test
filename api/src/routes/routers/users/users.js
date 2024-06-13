import express from 'express';
import { getUserByPk, getAllUsers } from './helpers.js';

const users = express.Router();

// Rutas para usuarios
users.get('/echo', async (req, res) => { //Echo
    res.status(200).send({text: "Mi nombre es usuarios"});
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
    let parsedId = parseInt(user_id, 10)

    if (typeof parsedId !== 'number') res.status(400).send({type: "id must be a number"});

    try{
        const response = await getUserByPk(user_id);
        res.status(200).send(response);
    }catch (e){
        res.status(400).send({error: e});
    }
});

export default users;
