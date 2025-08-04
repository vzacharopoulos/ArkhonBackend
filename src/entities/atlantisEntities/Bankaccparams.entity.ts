import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6208", ["comid"], { unique: true })
@ObjectType()
@Entity("BANKACCPARAMS", { schema: "dbo" })
export class Bankaccparams {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVPLDSRID", nullable: true })
  equivpldsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVMNDSRID", nullable: true })
  equivmndsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVPLUSID", nullable: true })
  equivplusid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "EQUIVMINUSID", nullable: true })
  equivminusid: number | null;

  @Field({ nullable: true })
  @Column("smallint", {
    name: "CHECKLIMIT",
    nullable: true,
    default: () => "1",
  })
  checklimit: number | null;
}
