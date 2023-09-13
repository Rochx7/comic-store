import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router()

routes.get('/authors', AuthorController.listAuthors)
routes.get('/authors/:id', AuthorController.listAuthorById)
routes.post('/authors', AuthorController.registerNewAuthor)
routes.put('/authors/:id', AuthorController.updateAuthor)
routes.delete('/authors/:id', AuthorController.deleteAuthorById)

export default routes