import { DataSource } from "typeorm";
import "dotenv/config";

const port = process.env.PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: port,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
