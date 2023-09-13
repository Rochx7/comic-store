import mongoose from "mongoose";
import { authorSchema } from './Author.js'

const comicsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required:true },
    publisher: { type:String, required:true },
    year: { type:mongoose.Schema.Types.Date, required:true },
    price: { type:Number, required:true },
    author: authorSchema 
  },{
    versionKey:false
  })

const comics = mongoose.model("comics", comicsSchema)

export default comics