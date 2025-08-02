import { Column, Entity, Index } from "typeorm";

@Index("KEF_SPECIFICATION_PK", ["recId"], { unique: true })
@Entity("KEF_SPECIFICATION", { schema: "dbo" })
export class KefSpecification {
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("datetime", { name: "FROMDATE", nullable: true })
  fromdate: Date | null;

  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Column("int", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Column("text", { name: "REMARKS", nullable: true })
  remarks: string | null;
}
