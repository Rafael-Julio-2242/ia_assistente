import dotenv from "dotenv";
import { Logger } from "./logger";

export class Enviroment {

  DB_HOST!: string;
  DB_PORT!: number;
  DB_USER!: string;
  DB_PASSWORD!: string;
  DB_NAME!: string;

  constructor(private logger: Logger) {
    dotenv.config();
    
    try {
      
      this.DB_HOST = process.env.DB_HOST!;
      this.DB_PORT = parseInt(process.env.DB_PORT!);
      this.DB_USER = process.env.DB_USER!;
      this.DB_PASSWORD = process.env.DB_PASSWORD!;
      this.DB_NAME = process.env.DB_NAME!;

    } catch (e: any) {
      this.logger.error("Error loading enviroment variables! ", e);
      process.exit(1);
    }
  
  }



}