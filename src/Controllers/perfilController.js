import modeloPerfil from '../Models/PerfilModelo.js';

class PerfilController {

    static listarPerfil = (req, res) => {
        modeloPerfil.find((err, perfil) => {
            if(!err) {
                res.status(200).send(perfil)
            } else {
                res.status(400).send({menssage: `${err.message} - Lista não encontrada`})
            }
        })
    }

    static cadastrarPerfil = (req, res) => {
        let novoPerfil = new modeloPerfil(req.body)
        novoPerfil.save((err) => {
            if(!err) {
                res.status(201).send(novoPerfil)
            } else {
                res.status(500).send({menssage: `${err.message} - Não foi possível cadastrar um novo perfil`})
            }
        })
    }

    static alterarPerfil = (req, res) => {
        const id = req.params.id
        modeloPerfil.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({menssage: `Perfil atualizado com sucesso`})
            } else {
                res.status(500).send({menssage: `${err.menssage} - Não foi possível atualizar o perfil`})
            }
        })
    }

    static deletarPerfil = (req, res) => {
        const id = req.params.id
        modeloPerfil.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({menssage: "Perfil detelato com sucesso"})
            } else {
                res.status(500).send({menssage: `${err.menssage} - Perfil não encontrado`})
            }
        })        
    }
}

export default PerfilController