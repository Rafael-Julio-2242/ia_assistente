import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("user")
export class User {

  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "email" })
  email!: string;

  @Column({ name: "google_token" })
  googleToken!: string;

  @Column({ name: "phone" })
  phone!: string;

  @Column({ name: "has_access" })
  hasAccess!: boolean;

}
