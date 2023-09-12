import mongoose from "mongoose";

const connectToDb = () =>{
  mongoose.connect("mongodb+srv://admin:admin123@cluster0.k8kzpsb.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
  }).then(()=> console.log('Successful connection'))
  .catch((error)=> console.error('Connection error', error))

}

export default connectToDb
