import express from 'express';
import rotaDoPerfil from './perfilRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Adopet, seja bem vindo(a) ao maior site de adoção"})
    })

    app.use(
        express.json(),
        rotaDoPerfil
    )
}

export default routes