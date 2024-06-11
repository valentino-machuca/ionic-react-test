const express  = require('express');
const movementsRouter = require('./routers/movements/movements');
const userRouter = require('./routers/users/users');

const router = express.Router();

router.use(express.json());
router.use('/movimientos', movementsRouter); // Consultas de movimientos
router.use('/users', userRouter); // Consultas de usuarios

router.get('/', async (req, res) => {
    try{
        res.status(200).send({text: "Existo y funciono joya, creo..."});
    }catch(e){
        res.status(400).send({error: e});
    }
});

module.exports = router;