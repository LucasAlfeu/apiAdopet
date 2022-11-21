import mongoose from "mongoose";

mongoose.connect("mongodb+srv://LucasAlfeu:Alfeu1904@cluster0.ubtb3er.mongodb.net/adopet")

let db = mongoose.connection
export default db