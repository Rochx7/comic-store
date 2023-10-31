import WrongRequest from "./WrongRequest.js";

class ValidationError extends WrongRequest{
  constructor(erro){
    const messageErro = Object.values(erro.errors).map((erro)=> erro.message).join("; ")

    super(`Os seguintes errors foram encontrados: ${messageErro}`)
  }

}

export default ValidationError