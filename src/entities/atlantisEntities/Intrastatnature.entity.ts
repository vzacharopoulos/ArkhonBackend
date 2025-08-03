import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_1060", ["codeid"], { unique: true })
@ObjectType()
@Entity("INTRASTATNATURE", { schema: "dbo" })
export class Intrastatnature {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("varchar", { name: "DESCR2", nullable: true, length: 255 })
  descr2: string | null;
}
