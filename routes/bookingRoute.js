const express = require("express");
const router = express.Router();
const bookingModel = require("../models/booking");
const roomModel = require("../models/room");

router.post("/bookRoom", async (req, res) => {
    const booking = new bookingModel(req.body);

    try {
        const response = await booking.save();
        const roomId = req.body.roomId;

        const roomTemp = await roomModel.findOne({ _id: roomId });

        roomTemp.bookedDates.push({
            _id: response._id,
            fromDate: moment(req.body.fromDate).format("DD-MM-YYYY"),
            toDate: moment(req.body.toDate).format("DD-MM-YYYY"),
            userId: req.body.userId,
            status: req.body.status,
        });

        await roomTemp.save();

        res.send(response);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
