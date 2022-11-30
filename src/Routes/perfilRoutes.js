import express from 'express';
import PerfilController from '../Controllers/perfilController.js';

const router = express.Router()

router
    .get("/", PerfilController.listarPerfil)
    .post("/", PerfilController.cadastrarPerfil)
    .put("/perfil/:id", PerfilController.alterarPerfil)
    .delete("perfil/:id", PerfilController.deletarPerfil)

export default router