import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_6208", ["comid"], { unique: true })
@ObjectType()
@Entity("BANKACCPARAMS", { schema: "dbo" })
export class Bankaccparams {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { name: "EQUIVPLDSRID", nullable: true })
  equivpldsrid: number | null;

  @Column("int", { name: "EQUIVMNDSRID", nullable: true })
  equivmndsrid: number | null;

  @Column("int", { name: "EQUIVPLUSID", nullable: true })
  equivplusid: number | null;

  @Column("int", { name: "EQUIVMINUSID", nullable: true })
  equivminusid: number | null;

  @Column("smallint", {
    name: "CHECKLIMIT",
    nullable: true,
    default: () => "1",
  })
  checklimit: number | null;
}
