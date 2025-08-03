import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docforms } from "./Docforms.entity";

@Index("UNI_6074", ["dfmid", "codeid"], { unique: true })
@ObjectType()
@Entity("USERVARDOCFORMS", { schema: "dbo" })
export class Uservardocforms {
  @Column("int", { primary: true, name: "DFMID" })
  dfmid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @ManyToOne(() => Docforms, (docforms) => docforms.uservardocforms, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DFMID", referencedColumnName: "id" }])
  dfm: Docforms;
}
