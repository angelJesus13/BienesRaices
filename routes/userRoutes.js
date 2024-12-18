import express from "express";
import { forgetPassword, formLogin, formRegister } from "../controllers/userController.js";

const router = express.Router();
//visitamos la pagina de login y pedimos o renderizamos el la funcion de formulario login desde nuestro controller
router.get('/login', formLogin);

router.get('/register', formRegister)

router.get('/forget-Password', forgetPassword)


 

export default router