import mongoose from "mongoose";

const perfilSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, require: true},
        email: {type: String, require: true},
        senha: {type: String, require:true},
        telefone: {type: String},
        cidade: {type: String},
        sobre: {type: String}
    }
)

const modeloPerfil = mongoose.model('perfil', perfilSchema)

export default modeloPerfil;