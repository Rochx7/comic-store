import NotFound from "../errors/NotFound.js"

function handler404(req, res, next){
  const error404 = new NotFound()
  next(error404)
}
export default handler404