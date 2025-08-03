import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18326", ["codeid"], { unique: true })
@ObjectType()
@Entity("MYDATATRADECODES", { schema: "dbo" })
export class Mydatatradecodes {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("varchar", { name: "MYDATACODE", nullable: true, length: 20 })
  mydatacode: string | null;

  @Column("varchar", { name: "ISSUER", nullable: true, length: 20 })
  issuer: string | null;

  @Column("smallint", { name: "TRADETYPE", nullable: true })
  tradetype: number | null;

  @Column("varchar", { name: "TRADETYPEDESCR", nullable: true, length: 20 })
  tradetypedescr: string | null;

  @Column("smallint", { name: "SELFDELIVERY", nullable: true })
  selfdelivery: number | null;

  @Column("smallint", { name: "ISWITHOUTFPA", nullable: true })
  iswithoutfpa: number | null;
}
