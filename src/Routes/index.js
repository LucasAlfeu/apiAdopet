import express from 'express';
import rotaDoPerfil from './perfilRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Olá, seja bem vindo ao maior site de adoção"})
    })

    app.use(
        express.json(),
        rotaDoPerfil
    )
}

export default routes