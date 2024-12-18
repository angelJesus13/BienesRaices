import  Sequelize  from "sequelize";
import dotenv from 'dotenv'
dotenv.config({path:'.env'})
//crear una nueva instancia y se conectara a la Base de datos
const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASSWORD ?? '',{
    host:process.env.BD_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    //mantener las la conexiones que aun esten vivas
    pool: {
        max:5,
        min:0,
        acquire: 3000, //tiempo de espera antes de marcar un error
        idle: 10000 //no hay visitas nadie lo utiliza le da 10 segundos y la conexion se finaliza
    },
    operatorAliases: false
})

export default db