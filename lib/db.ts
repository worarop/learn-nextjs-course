import { DataSource } from "typeorm"
import { Province } from "../models/province.model"

const db = new DataSource({
    type: "oracle",
    host: process.env.ORACLE_HOST,
    port: Number(process.env.ORACLE_PORT),
    username: process.env.ORACLE_USERNAME,
    password: process.env.ORACLE_PASSWORD,
    serviceName: process.env.ORACLE_SERVICE_NAME,
    synchronize: process.env.NODE_ENV !== "production",
    entities: [Province],
})

db.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export const connectDB = (delay = 3000): Promise<DataSource> => {
    if (db.isInitialized) return Promise.resolve(db);
      
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (db.isInitialized) resolve(db);
            else reject("Failed to create connection with database");
          }, delay);
        });
};