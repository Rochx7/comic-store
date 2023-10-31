import ErrorBase from "./ErroBase.js";

class WrongRequest extends ErrorBase{
  constructor(message = "Um ou mais dados fornecidos estão incorretos"){
    super(message, 400)
  }
}

export default WrongRequest