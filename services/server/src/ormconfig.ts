import "./env";
import { ConnectionOptions } from "typeorm";

export default {
    type: 'postgres',
    host: 'localhost',
    port: 6543,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    database: 'TEST_SM',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true
} as ConnectionOptions;