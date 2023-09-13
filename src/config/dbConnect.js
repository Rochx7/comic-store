import mongoose from "mongoose";

const connectToDb = () =>{
  mongoose.connect(process.env.DB_CONNECTION_STRING).then(()=> console.log('Successful connection'))
  .catch((error)=> console.error('Connection error', error))

}

export default connectToDb
