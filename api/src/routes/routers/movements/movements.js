const express = require('express');
const { getMovementsByUserId } = require('./helpers');

const movements = express.Router();

// Rutas para movimientos
movements.get('/echo', async (req, res) => {
    res.status(200).send({text: "Mi nombre es movimientos"});
});

movements.get('/:user_id', async (req, res) => { // Obtener movimientos en los que participa un usuario.
    let { user_id } = req.params;

    try{
        const response = await getMovementsByUserId(user_id);
        res.status(200).send(response);
    }catch (e){
        res.status(400).send({error: e});
    }
});

module.exports = movements;