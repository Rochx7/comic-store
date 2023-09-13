import express from "express";
import ComicController from "../controllers/comicController.js";

const routes = express.Router()

routes.get('/comics', ComicController.listComics)
routes.get('/comics/search', ComicController.listComicByPublisher)
routes.get('/comics/:id', ComicController.listComicById)
routes.post('/comics', ComicController.registerNewComic)
routes.put('/comics/:id', ComicController.updateComic)
routes.delete('/comics/:id', ComicController.deleteComicById)

export default routes