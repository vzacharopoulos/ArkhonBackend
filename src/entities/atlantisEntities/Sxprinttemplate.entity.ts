import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_SX15310", ["domaintype", "codeid", "formtype"], { unique: true })
@Index("UNI_SX15312", ["domaintype", "fromdate", "formtype", "pagenum"], {
  unique: true,
})
@ObjectType()
@Entity("SXPRINTTEMPLATE", { schema: "dbo" })
export class Sxprinttemplate {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 30 })
  descr: string | null;



  @Field({ nullable: true })
  @Column("int", { primary: true, name: "DOMAINTYPE", default: () => "(-15)" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "AUTOPAPERFEED",
    nullable: true,
    default: () => "(0)",
  })
  autopaperfeed: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TDCID", nullable: true })
  tdcid: number | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FORMTYPE" })
  formtype: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "FROMDATE", unique: true })
  fromdate: Date;

  @Field({ nullable: true })
  @Column("smallint", { name: "PAGENUM", nullable: true, unique: true })
  pagenum: number | null;
}
