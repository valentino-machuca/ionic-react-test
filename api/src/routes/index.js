const express  = require('express');

const router = express.Router();

router.use(express.json());

router.get('/echo', async (req, res) => {
    try{
        res.status(200).send({text: "Existo y funciono joya, creo..."});
    }catch(e){
        res.status(400).send({error: e});
    }
});

module.exports = router;