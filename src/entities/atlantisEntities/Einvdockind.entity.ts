import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_1426", ["code"], { unique: true })
@ObjectType()
@Entity("EINVDOCKIND", { schema: "dbo" })
export class Einvdockind {
  @Column("varchar", { primary: true, name: "CODE", length: 5 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 200 })
  descr: string;

  @Column("int", { name: "DSIGN", nullable: true })
  dsign: number | null;
}
