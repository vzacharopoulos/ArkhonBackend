import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docforms } from "./Docforms.entity";

@Index("UNI_1446_1", ["dfmid", "codeid", "domaintype"], { unique: true })
@ObjectType()
@Entity("USERVARDOCFORMSMESSAGES", { schema: "dbo" })
export class Uservardocformsmessages {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "DFMID" })
  dfmid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "MESSAGE", nullable: true, length: 255 })
  message: string | null;

  @Field({ nullable: true })
  @Column("smallint", {
    primary: true,
    name: "DOMAINTYPE",
    default: () => "(1)",
  })
  domaintype: number;

  @Field({ nullable: true })
  @ManyToOne(() => Docforms, (docforms) => docforms.uservardocformsmessages, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DFMID", referencedColumnName: "id" }])
  dfm: Docforms;
}
