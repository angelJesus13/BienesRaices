//type module usando import
import express from 'express';
import userRoutes from './routes/userRoutes.js'

//creamos la app
const app = express();

//habilitamos un template engine pug
app.set('view engine', 'pug')
//encontrara todoas las vistas en views
app.set('views, ', './views')

//carpeta publica de manera estatica contenedor
app.use( express.static('public'))

//app.get('/', userRoutes) //se limita a un get o sea a la ruta por defecto

app.use('/auth', userRoutes)//middleware de express cada que visitas se va ejecutando buscando la ruta correcta
app.use('/', userRoutes)

//Definimos un puerto para arrancar el proyecto
const port = 4000;

//la variable de creacion de la app inyectando la variable de puerto para saber en que puerto estara

app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});