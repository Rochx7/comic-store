import { author, comics } from "../models/index.js";

class ComicController{

  static async listComics (req,res,next){
    try {
      const searchComics = comics.find()

      req.result = searchComics
      next()
    } catch (error) {
      next(error) 
    }
  }

  static async listComicById (req, res, next){
    try {
      const id = req.params.id
      const findendComic = await comics.findById(id);
      if(findendComic !== null){
        res.status(200).json(findendComic);
      }else {
        next(new NotFound('Id da hq não encontrada.'))
      }
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

  static async listComicByFilter(req, res,next){
    try {
      const search = await processSearch(req.query)

      if(search !==null){
        const comicsByPublisher = comics.find(search)
        req.result = comicsByPublisher
        next()
      }else{
        res.status(200).json([])
      }
    } catch (error) {
      res.status(500).json({message: `${error.message} - Error on get comic by publisher`})
    }
    
  }

}

async function processSearch(params){
  const {publisher, title, name} = params

  let search = {}

  if(publisher) search.publisher = publisher
  
  if(title) search.title = {$regex: title, $options:"i"}

  if(name){
    const authorByName = await author.findOne({ name: name})

    if(authorByName !== null){
      search.author = author._id
    }else{
      search = null
    }
    
  }

  return search
}

export default ComicController
