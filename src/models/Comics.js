import mongoose from "mongoose";

const comicsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required:true },
    publisher: { type:String, required:true },
    year: { type:mongoose.Schema.Types.Date, required:true },
    price: { type:Number, required:true }
  },{
    versionKey:false
  })

const comics = mongoose.model("comics", comicsSchema) // mongoose.model("reference collections "db, schema above) 

export default comics