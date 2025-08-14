import { DataSource, Repository } from "typeorm";
import { User } from "../model/user.entity";

export class UserRepository {

  private repo: Repository<User>

  constructor(connection: DataSource) {
    this.repo = connection.getRepository(User)
  }

  

}
