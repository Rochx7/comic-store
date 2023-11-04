import WrongRequest from "../errors/WrongRequest.js"

async function pagination (req, res, next){
  try {
    let {limit = 5, page = 1, ordenationField = "_id", order= -1 } = req.query
      limit = parseInt(limit)
      page = parseInt(page)
      order = parseInt(order)

      const result = req.result

      if(limit > 0 && page > 0){
        const resulPaginated = await result.find({}).sort({[ordenationField]: order}).skip((page - 1) * limit).limit(limit)
        res.status(200).json(resulPaginated);
      }else{
        next(new WrongRequest()) 
      }
  } catch (error) {
    next(error) 
  }
}

export default pagination