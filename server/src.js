import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app=express();app.use(cors());app.use(express.json());
const schema=new mongoose.Schema({name:String,email:String,message:String,createdAt:{type:Date,default:Date.now}});
const Message=mongoose.model('Message',schema);
app.get('/api/health',(req,res)=>res.json({ok:true}));
app.post('/api/contact',async(req,res)=>{const {name,email,message}=req.body;if(!name||!email||!message)return res.status(400).json({message:'All fields are required.'});try{if(mongoose.connection.readyState===1){await Message.create({name,email,message});}else{console.log('Demo contact message:',{name,email,message});}res.json({message:'Thanks — your message was received.'});}catch(err){console.error(err);res.status(500).json({message:'Could not save your message.'});}});
const port=process.env.PORT||5000;
if(process.env.MONGO_URI){mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch(()=>console.log('MongoDB unavailable — running in demo mode.'));}
app.listen(port,()=>console.log(`API running on http://localhost:${port}`));
