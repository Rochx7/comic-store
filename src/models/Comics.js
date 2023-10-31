import mongoose from "mongoose";
import { authorSchema } from './Author.js'

const comicsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "O título do livro é obrigatorio." ] },
    publisher: { type:String, required: [true, "O nome da editora é obrigatorio." ] },
    year: { type:mongoose.Schema.Types.Date, required: [true, "O ano de criação é obrigatorio." ] },
    price: { type:Number, required: [true, "O valor é obrigatorio." ] },
    author: authorSchema 
  },{
    versionKey:false
  })

const comics = mongoose.model("comics", comicsSchema)

export default comics