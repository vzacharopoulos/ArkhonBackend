import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("TMPCUSTBALSHEET", { schema: "dbo" })
export class Tmpcustbalsheet {
  @PrimaryColumn("int", { name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("int", { name: "FIPID" })
  fipid: number;

  @Field({ nullable: true })
  @Column("int", { name: "MASTERID" })
  masterid: number;

  @Field({ nullable: true })
  @Column("float", { name: "FFMEANDUETIME", nullable: true, precision: 53 })
  ffmeanduetime: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "FFMEANPAYMENTTIME", nullable: true, precision: 53 })
  ffmeanpaymenttime: number | null;
}
