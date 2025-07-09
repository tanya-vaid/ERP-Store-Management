import { Sequelize, DataTypes } from 'sequelize'
import 'dotenv/config'
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST_NAME,
        dialect:process.env.DIALECT
}
)

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
db.DataTypes = DataTypes

export default db