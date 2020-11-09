import { ConnectionOptions } from "typeorm";

export default {
    type: 'postgres',
    host: 'localhost',
    port: 6543,
    username: 'postgres',
    password: 'postgres',
    database: 'TEST_SM',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    logging: true
} as ConnectionOptions;