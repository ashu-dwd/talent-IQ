import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.json({ message: "chat is running", user: req.user });
});


export default router;
