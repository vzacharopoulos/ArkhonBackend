import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18318", ["codeid"], { unique: true })
@Index("UNI_18320", ["descr"], { unique: true })
@ObjectType()
@Entity("MYDATASHIPCAUSE", { schema: "dbo" })
export class Mydatashipcause {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", unique: true, length: 120 })
  descr: string;
}
