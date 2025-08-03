import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Itemsup } from "./Itemsup.entity";

@Index("UNI_2866", ["iteid", "supid", "codedate"], { unique: true })
@ObjectType()
@Entity("ITSUPHIST", { schema: "dbo" })
export class Itsuphist {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("int", { primary: true, name: "SUPID" })
  supid: number;

  @Column("datetime", { primary: true, name: "CODEDATE" })
  codedate: Date;

  @Column("varchar", { name: "SUPITECODE", length: 25 })
  supitecode: string;

  @ManyToOne(() => Itemsup, (itemsup) => itemsup.itsuphists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "ITEID", referencedColumnName: "iteid" },
    { name: "SUPID", referencedColumnName: "supid" },
  ])
  itemsup: Itemsup;
}
