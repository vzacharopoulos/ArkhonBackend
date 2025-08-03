import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18276", ["classcode"], { unique: true })
@ObjectType()
@Entity("MYDATAREGSETUPACCREC", { schema: "dbo" })
export class Mydataregsetupaccrec {
  @Column("smallint", { name: "ACCTYPE", nullable: true })
  acctype: number | null;

  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 70 })
  description: string | null;

  @Column("varchar", { primary: true, name: "CLASSCODE", length: 20 })
  classcode: string;
}
