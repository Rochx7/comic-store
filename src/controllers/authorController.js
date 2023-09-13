import { author } from "../models/Author.js";

class AuthorController{

  static async listAuthors (req,res){
    try {
      const authorList = await author.find({});
      res.status(200).json(authorList);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on get author`})
      
    }
  }

  static async listAuthorById (req,res){
    try {
      const id = req.params.id
      const findendAuthor = await author.findById(id);
      res.status(200).json(findendAuthor);
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on get author by id`})
      
    }
  }

  static async registerNewAuthor (req,res){
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({message:'Success on register new author', author: newAuthor})
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on register new author`})
    }
  }

  static async updateAuthor (req,res){
    try {
      const id = req.params.id
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({message:'Success on update author'})
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on update author`})
    }
  }

  static async deleteAuthorById (req,res){
    try {
      const id = req.params.id
      await author.findByIdAndDelete(id);
      res.status(200).json({message:'Success on delete author'})
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on delete author`})
    }
  }

}

export default AuthorController
