import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company.entity";
import { Puser } from "./Puser.entity";

@Index("UNI_18156", ["id"], { unique: true })
@Index("UNI_18158", ["emailaddress"], { unique: true })
@ObjectType()
@Entity("EMAILACCOUNT", { schema: "dbo" })
export class Emailaccount {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("datetime", { name: "INSERTDATE", nullable: true })
  insertdate: Date | null;

  @Column("varchar", {
    name: "EMAILADDRESS",
    nullable: true,
    unique: true,
    length: 255,
  })
  emailaddress: string | null;

  @Column("varchar", { name: "PASSWORD", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", { name: "INCOMINGFOLDERS", nullable: true })
  incomingfolders: string | null;

  @OneToMany(() => Company, (company) => company.emailaccount)
  companies: Company[];



  @OneToMany(() => Puser, (puser) => puser.emailaccount)
  pusers: Puser[];
}
