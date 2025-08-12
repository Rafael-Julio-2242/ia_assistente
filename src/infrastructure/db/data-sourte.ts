import "reflect-metadata";
import { DataSource } from "typeorm";
import { Logger } from "../../shared/logger";
import { Enviroment } from "../../shared/enviroment";


export class Connections {

  private dbDataSource: DataSource;
  private dbConnection: DataSource | null = null;


  constructor (private logger: Logger, private env: Enviroment) {
    this.dbDataSource = new DataSource({
      type: "postgres",
      host: this.env.DB_HOST,
      username: this.env.DB_USER,
      password: this.env.DB_PASSWORD,
      database: this.env.DB_NAME,
      port: this.env.DB_PORT,
    });
  }


  async connect() {
    if (!this.dbConnection) {
      this.dbConnection = await this.dbDataSource.initialize();
    }

    return this.dbConnection;
  }

  async close() {
    if (this.dbConnection) {
      await this.dbConnection.destroy();
      this.dbConnection = null;
    }
  }

}
