import { chatClient } from "../lib/stream.js"


export const getStreamToken = async (req, res) => {
    try {
        //use clerk id for stream because we are saving clerk id in stream db
        const token = await chatClient.createToken(
            req.user.clerkId,
        );
        return res.status(200).json({ token, userId: req.user.clerkId, username: req.user.username, userImage: req.user.image });
    } catch (error) {
        console.error("Error in getStreamToken controller ", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}   