import NotFound from "../errors/NotFound.js";
import { author } from "../models/index.js";

class AuthorController{

  static async listAuthors (req,res,next){
    try {
      const authorList = author.find({});
      req.result = authorList
      next()
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on get author`})
    }
  }

  static async listAuthorById (req,res,next){
    try {
      const id = req.params.id
      const findendAuthor = await author.findById(id);
      if(findendAuthor !== null){
        res.status(200).json(findendAuthor);
      }else {
        next(new NotFound('Id do autor não encontrado.'))
      }
    } catch (error) {
      next(error)
    }
  }

  static async registerNewAuthor (req,res,next){
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({message:'Success on register new author', author: newAuthor})
    } catch (error) {
      next(error)
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
