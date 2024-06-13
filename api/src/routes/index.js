import express from 'express';
import movementsRouter from './routers/movements/movements.js';
import userRouter from './routers/users/users.js';

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

export default router;