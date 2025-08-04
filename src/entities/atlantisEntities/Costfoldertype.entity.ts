import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5800", ["comid", "domaintype", "codeid"], { unique: true })
@ObjectType()
@Entity("COSTFOLDERTYPE", { schema: "dbo" })
export class Costfoldertype {
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
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDEST", nullable: true })
  dsridest: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDCLOSE", nullable: true })
  dsridclose: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DSRIDDIFF", nullable: true })
  dsriddiff: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDEST", nullable: true })
  gusidest: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "GUSIDCLOSE", nullable: true })
  gusidclose: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ITEUPDMODE", default: () => "0" })
  iteupdmode: number;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "ITEGROUPMODE",
    nullable: true,
    default: () => "1",
  })
  itegroupmode: number | null;
}
