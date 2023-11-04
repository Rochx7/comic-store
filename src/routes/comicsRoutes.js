import express from "express";
import ComicController from "../controllers/comicController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router()

routes.get('/comics', ComicController.listComics, pagination)
routes.get('/comics/search', ComicController.listComicByFilter,pagination)
routes.get('/comics/:id', ComicController.listComicById)
routes.post('/comics', ComicController.registerNewComic)
routes.put('/comics/:id', ComicController.updateComic)
routes.delete('/comics/:id', ComicController.deleteComicById)

export default routes