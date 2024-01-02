const express = require('express');
const router = express.Router();

const roomModel = require('../models/room')

router.get('/getAllRooms',async (req,res)=>{
    try{
        const rooms = await roomModel.find();
        res.send(rooms);
    }catch(error){
        return res.status(400).json({massage: error});
    }
});

module.exports = router;