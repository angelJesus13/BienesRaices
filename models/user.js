import { DataTypes } from 'sequelize'
import db from '../config/db.js'

//tabla en la BD los campos de usuarios (columnasa y diferentes tipos de datos)
const user = db.define('users',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN

})


export default user