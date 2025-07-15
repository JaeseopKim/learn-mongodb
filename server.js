// requeire("express")
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

const app = express();

// 환경변수
dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

// mongoDB 연결
// MongoDB 객체 생성(mongoDB와의 연결을 관리, 상호작용)
const client = new MongoClient(MONGODB_URI);

const connectDB = async () => {
    try {
        // DB와의 연결 시도
        await client.connect();
        console.log("🍅 MongoDB connected");
    } catch (error) {
        console.log(`🥓 ${error}`);
    }
}


app.listen(PORT, () => {
    console.log("server running at", PORT);
    console.log(MONGODB_URI);
    connectDB();
});