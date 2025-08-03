import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_PRDATA_PK", ["comid", "domainid1", "domainid2", "linenum"], {
  unique: true,
})
@ObjectType()
@Entity("KEF_PRDATA", { schema: "dbo" })
export class KefPrdata {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "DOMAINID1" })
  domainid1: number;

  @Column("int", { primary: true, name: "DOMAINID2" })
  domainid2: number;

  @Column("int", { primary: true, name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "DOMAINCODE1", nullable: true, length: 25 })
  domaincode1: string | null;

  @Column("varchar", { name: "DOMAINCODE2", nullable: true, length: 25 })
  domaincode2: string | null;

  @Column("float", { name: "QTY", nullable: true, precision: 53 })
  qty: number | null;

  @Column("float", { name: "FLD1", nullable: true, precision: 53 })
  fld1: number | null;

  @Column("float", { name: "FLD2", nullable: true, precision: 53 })
  fld2: number | null;

  @Column("datetime", { name: "FDATE", nullable: true })
  fdate: Date | null;

  @Column("datetime", { name: "LDATE", nullable: true })
  ldate: Date | null;

  @Column("int", { name: "PRPID", nullable: true })
  prpid: number | null;

  @Column("int", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;
}
