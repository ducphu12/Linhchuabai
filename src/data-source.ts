import "reflect-metadata"
import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "manager",
    synchronize: false,
    entities: ["dist/src/model/*.js"],
})
