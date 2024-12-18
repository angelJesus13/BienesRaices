import express from "express";
import { formLogin, formRegister } from "../controllers/userController.js";

const router = express.Router();
//visitamos la pagina de login y pedimos o renderizamos el la funcion de formulario login desde nuestro controller
router.get('/login', formLogin);

router.get('/register', formRegister)


 

export default router