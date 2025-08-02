import { Column, Entity, Index } from "typeorm";

@Index("KEF_SUPPADDRESS_PK", ["recId"], { unique: true })
@Entity("KEF_SUPPADDRESS", { schema: "dbo" })
export class KefSuppaddress {
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Column("varchar", { name: "CODE", nullable: true, length: 15 })
  code: string | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 30 })
  descr: string | null;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;

  @Column("varchar", { name: "PERCODE", nullable: true, length: 25 })
  percode: string | null;

  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Column("int", { name: "ISACTIVE", nullable: true })
  isactive: number | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 30 })
  district: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("varchar", { name: "CONTACTPERSON", nullable: true, length: 25 })
  contactperson: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Column("int", { name: "FPASTATUS", nullable: true })
  fpastatus: number | null;
}
