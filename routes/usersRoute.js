const express = require("express");
const router = express.Router();

const userModel = require("../models/user");

router.post("/register", async (req, res) => {
    const user = new userModel(req.body);

    try {
        const response = await user.save();
        if(response){
            const temp = {
                _id: response._id,
                firstName: response.firstName,
                lastName: response.lastName,
                userName: response.userName,
                email: response.email,
                isAdmin: response.isAdmin,
            }
            res.send(temp);
        }
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await userModel.findOne({
            email: email,
            password: password,
        });
        if (response) {

            const temp = {
                _id: response._id,
                firstName: response.firstName,
                lastName: response.lastName,
                userName: response.userName,
                email: response.email,
                isAdmin: response.isAdmin,
            }

            res.send(temp);
        } else {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.get("/getAllUsers", async (req, res) => {
    try {
        const response = await userModel.find();
        res.send(response);
    }catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;