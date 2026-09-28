import express from "express"
import { connectDB } from "./db/db.js";
const app = express();
import Todorouter from "./routes/todo.routes.js";

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/todo/',Todorouter);


connectDB().then(()=>{
    app.listen(3000, () => {
      console.log("Server is listening at the port 3000.");
    });
})