import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_15462", ["id"], { unique: true })
@Index("UNIX_15462", ["code"], {})
@ObjectType()
@Entity("SXKAD97", { schema: "dbo" })
export class Sxkad97 {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  @Column("varchar", { name: "CODE", length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;
}
