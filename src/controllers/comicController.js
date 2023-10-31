import { author } from "../models/Author.js";
import comics from "../models/Comics.js";

class ComicController{

  static async listComics (req,res,next){
    try {
      const comicsList = await comics.find({});
      res.status(200).json(comicsList);
    } catch (error) {
      next(error) 
    }
  }

  static async listComicById (req, res, next){
    try {
      const id = req.params.id
      const findendComic = await comics.findById(id);
      res.status(200).json(findendComic);
    } catch (error) {
      next(error)
      
    }
  }

  static async registerNewComic (req,res){
    const newComic = req.body;
    try {
      const authorFindend = await author.findById(newComic.author)
      const comicBody = {...newComic, author: {...authorFindend._doc}}
      const createdComic = await comics.create(comicBody)
      res.status(201).json({message:'Success on register new comic', comic: createdComic})
    } catch (error) {
      next(error)
    }
  }

  static async updateComic (req,res){
    try {
      const id = req.params.id
      await comics.findByIdAndUpdate(id, req.body);
      res.status(200).json({message:'Success on update comic'})
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on update comic`})
    }
  }

  static async deleteComicById (req,res){
    try {
      const id = req.params.id
      await comics.findByIdAndDelete(id);
      res.status(200).json({message:'Success on delete comic'})
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on delete comic`})
    }
  }

  static async listComicByPublisher (req, res){
    const publisher = req.query.publisher
    try {
      const comicsByPublisher = await comics.find({publisher: publisher})
      res.status(200).json(comicsByPublisher)
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on get comic by publisher`})
      
    }
    
  }

}

export default ComicController
