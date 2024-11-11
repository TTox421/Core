import * as alt from 'alt-server';
import "reflect-metadata";
import { DataSource, EntityManager } from 'typeorm';

/**
 * Схемы БД.
*/
import { Entities } from "./entity/index.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5000,
    username: "user",
    password: "password",
    database: "database_name",
    synchronize: true,
    logging: false,
    entities: Entities,
    migrations: [],
    subscribers: []
})

export class Database {
    static manager: EntityManager = AppDataSource.manager;

    static async start() {
        if(AppDataSource.isInitialized) return;
        await AppDataSource.initialize()
        // await AppDataSource.synchronize()
    }

    static async close() {
        if(!AppDataSource.isInitialized) return;
        await AppDataSource.destroy();
        alt.log("~m~Database closed");
    }
}