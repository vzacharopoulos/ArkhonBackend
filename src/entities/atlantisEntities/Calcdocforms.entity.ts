import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docforms } from "./Docforms.entity";

@Index(
  "UNI_5764_1",
  ["comid", "fyeid", "fipid", "dfmid", "atype", "linkid", "fipid_2"],
  { unique: true }
)
@ObjectType()
@Entity("CALCDOCFORMS", { schema: "dbo" })
export class Calcdocforms {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FIPID" })
  fipid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "DFMID" })
  dfmid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "ATYPE" })
  atype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "LINKID" })
  linkid: number;

  @Field({ nullable: true })
  @Column("float", { name: "TOTAMOUNT", precision: 53 })
  totamount: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FIPID_2" })
  fipid_2: number;

  @Field({ nullable: true })
  @Column("float", { name: "PREVFAMOUNT", precision: 53, default: () => "0" })
  prevfamount: number;

  @Field({ nullable: true })
  @Column("float", { name: "TOTAMOUNTDE", nullable: true, precision: 53 })
  totamountde: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Docforms, (docforms) => docforms.calcdocforms, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DFMID", referencedColumnName: "id" }])
  dfm: Docforms;
}
