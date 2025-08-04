import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docseries } from "./Docseries.entity";

@Index("UNI_1420", ["comid", "domaintype", "codeid", "fyeid"], { unique: true })
@ObjectType()
@Entity("DOCSERIESNUMBER", { schema: "dbo" })
export class Docseriesnumber {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { name: "LASTUSEDNUMBER", default: () => "0" })
  lastusednumber: number;

  @Field({ nullable: true })
  @ManyToOne(() => Docseries, (docseries) => docseries.docseriesnumbers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "DOMAINTYPE", referencedColumnName: "domaintype" },
    { name: "CODEID", referencedColumnName: "codeid" },
  ])
  docseries: Docseries;
}
