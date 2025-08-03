import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_ACCOUNTEXT_PK", ["accid"], { unique: true })
@ObjectType()
@Entity("KEF_ACCOUNTEXT", { schema: "dbo" })
export class KefAccountext {
  @Column("int", { primary: true, name: "ACCID" })
  accid: number;

  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("varchar", { name: "NAME", nullable: true, length: 80 })
  name: string | null;

  @Column("varchar", { name: "JOBDESCR", nullable: true, length: 80 })
  jobdescr: string | null;

  @Column("int", { name: "CNTID", nullable: true })
  cntid: number | null;

  @Column("varchar", { name: "AFM", nullable: true, length: 15 })
  afm: string | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 25 })
  district: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Column("varchar", { name: "MANAGER", nullable: true, length: 80 })
  manager: string | null;

  @Column("int", { name: "SUMKEPYO", nullable: true })
  sumkepyo: number | null;
}
