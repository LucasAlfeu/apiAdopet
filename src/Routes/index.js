import express from 'express';
import rotaDoPerfil from './perfilRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send(perfil)
    })

    app.use(
        express.json(),
        rotaDoPerfil
    )
}

export default routes