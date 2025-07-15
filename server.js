// requeire("express")
import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

const app = express();

// 환경변수
dotenv.config();

// JSON형태의 데이터를 객체로 변환
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

// mongoDB 연결
// MongoDB 객체 생성(mongoDB와의 연결을 관리, 상호작용)
const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME); // 데이터베이스 선택
const collection = db.collection("users"); // 컬렉션 선택

// 데이터 읽기 - GET
app.get('/users', async (req, res) => {
    try {
        // Cursor 객체: 데이터를 한개씩 순차적으로 가져와 document를 반환. 한번에 다 가져오지 않고 순차적으로 반환.
        const users = await collection.find().toArray();
        console.log("🚀 users.length:", users.length);
        console.log("🚀 users:", users);
        // 응답
        res.status(200).json(users);

    } catch (error) {
        console.log(`fetch error: ${error}`);
        // 응답
        res.status(500).json({
            message: "Error fetching user",
            error: error.message
        });
    }
});

// 특정데이터 읽기 - GET
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params; // string
        const data = req.body;

        const user = await collection.findOne({
            _id: new ObjectId(id)
        }, {
            projection: { name: 1, _id: 1 }
        });


        // Cursor 객체: 데이터를 한개씩 순차적으로 가져와 document를 반환. 한번에 다 가져오지 않고 순차적으로 반환.
        //const users = await collection.find().toArray();
        //console.log("🚀 users.length:", users.length);
        //console.log("🚀 users:", users);
        // 응답
        res.status(200).json(user);

    } catch (error) {
        console.log(`fetch error: ${error}`);
        // 응답
        res.status(500).json({
            message: "Error fetching user11",
            error: error.message
        });
    }
});


// 데이터 추가 - POST
app.post("/users", async (req, res) => {
    // req.body: object
    //const name = req.body.name
    //const age = req.body.age
    //const email = req.body.email
    // 구조 분해 할당
    try {
        const { name: userName, age, email } = req.body;
        console.log("🚀 userName:", userName);
        const result = await collection.insertOne({ ...req.body, createdAt: new Date() });

        console.log("🚀 result:", result);
        // 응답 
        res.status(201).json(result);
    } catch (error) {
        console.log(`error creating user: ${error}`);
        // 응답 
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
})

// 데이터 수정 - PUT
app.put("/users/:id", async (req, res) => {

    try {
        const { id } = req.params; // string
        const data = req.body;

        const result = await collection.updateOne({
            _id: new ObjectId(id)
        }, {
            $set: { ...data, updateAt: new Date() }
        });

        if (result.matchedCount) {
            // 수정된 문서가 있는경우 응답
            res.status(200).json(result);
            return;
        }
        // 수정된 문서가 없는 경우 응답
        res.status(404).json({
            message: "User not found or no change made"
        });

    } catch (error) {
        console.log(`error updating user: ${error}`);
        // 응답 
        res.status(500).json({
            message: "Error updating user",
            error: error.message
        });
    }
})

// 데이터 삭제 - DELETE
app.delete("/users/:id", async (req, res) => {

    try {
        const { id } = req.params; // string

        const result = await collection.deleteOne({
            _id: new ObjectId(id)
        });

        if (result.deletedCount) {
            // 삭제된 문서가 있는경우 응답
            res.status(200).json({
                message: "User deleted",
                id
            });
            return;
        }
        // 삭제된 문서가 없는 경우 응답
        res.status(404).json({
            message: "User not found"
        });


    } catch (error) {
        console.log(`error deleting user: ${error}`);
        // 응답 
        res.status(500).json({
            message: "Error deleting user",
            error: error.message
        });
    }
})

const connectDB = async () => {
    try {
        // DB와의 연결 시도
        await client.connect();
        console.log("🍅 MongoDB connected");
    } catch (error) {
        console.log(`🥓 MongoDB Error: ${error}`);
    }
}


app.listen(PORT, () => {
    console.log("server running at", PORT);
    console.log(MONGODB_URI);
    connectDB();
});