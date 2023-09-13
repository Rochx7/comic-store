import express from 'express'
import comicsRoutes from './comicsRoutes.js'
import author from './authorsRoutes.js'

const routes = (app) =>{
  app.route('/').get((req,res) => res.status(200).send('Course Node.js'))

  app.use(express.json(), comicsRoutes, author)
}

export default routes