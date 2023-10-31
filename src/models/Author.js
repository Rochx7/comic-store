import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.ObjectId},
  name: {type: String, required: [true, "O nome do autor(a) é obrigatorio." ]},
  nationality: {type: String}
},{versionKey: false})

const author = mongoose.model('authors', authorSchema)

export { author, authorSchema }