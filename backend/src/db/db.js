import mongoose from "mongoose"
import mogoose from "mongoose"

export const  connectDB = async ()=>{
try {
    mongoose.connect("mongodb://localhost:27017/todo").then(()=>{
        console.log("mongo db connection established ");
        
    })
} catch (error) {
    console.log("error in mongo db",error.message);
    
}
}