import { DataSource } from "typeorm";
import { User } from "../entities/User";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "ep-late-night-98020738.us-east-2.aws.neon.fl0.io",
  username: "fl0user",
  password: "UZf1CsxLey0H",
  port: 5432,
  database: "database",
  url: "postgres://fl0user:IUKZEk0F9unO@ep-late-night-98020738.us-east-2.aws.neon.fl0.io:5432/database?sslmode=require",
  entities: [User],
  synchronize: true,
});

export { AppDataSource };
