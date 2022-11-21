import express from 'express';
import PerfilController from '../Controllers/perfilController.js';

const router = express.Router()

router
    .get("/perfil", PerfilController.listarPerfil)
    .post("/perfil", PerfilController.cadastrarPerfil)
    .put("/perfil/:id", PerfilController.alterarPerfil)
    .delete("perfil/:id", PerfilController.deletarPerfil)

export default router