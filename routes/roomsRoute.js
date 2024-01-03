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

router.post('/getRoomById',async (req,res)=>{

    const roomId = req.body.RoomId;
    try{
        const room = await roomModel.findOne({_id : roomId})
        res.send(room);
    }catch(error){
        return res.status(400).json({message: error});
    }
});

module.exports = router;
