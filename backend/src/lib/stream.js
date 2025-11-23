import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    throw new Error("Missing Stream API key or secret");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
    try {
        const user = await chatClient.upsertUser(userData);
        return user;
    } catch (error) {
        console.error("Error upserting user:", error);
        throw error;
    }

}

export const deleteStreamUser = async (clerkId) => {
    try {
        const user = await chatClient.deleteUser(clerkId);
        console.log("Stream User deleted successfully:", clerkId);
        return user;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}   