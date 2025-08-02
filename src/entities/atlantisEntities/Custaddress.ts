import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer";
import { Geogrpos } from "./Geogrpos";
import { Country } from "./Country";

@Index("UNI_2100", ["id"], { unique: true })
@Entity("CUSTADDRESS", { schema: "dbo" })
export class Custaddress {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "CODE", length: 15 })
  code: string;

  @Column("varchar", { name: "CONTACTPERSON", nullable: true, length: 25 })
  contactperson: string | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 200 })
  descr: string | null;

  @Column("varchar", { name: "DISTRICT", nullable: true, length: 50 })
  district: string | null;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Column("smallint", { name: "FPASTATUS", default: () => "0" })
  fpastatus: number;

  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Column("int", { name: "SHVID", nullable: true })
  shvid: number | null;

  @Column("int", { name: "COLIDSALESMAN", nullable: true })
  colidsalesman: number | null;

  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Column("int", { name: "CARID", nullable: true })
  carid: number | null;

  @Column("int", { name: "TRSID", nullable: true })
  trsid: number | null;

  @Column("int", { name: "ROTID", nullable: true })
  rotid: number | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Column("float", {
    name: "DEFAULTDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  defaultdiscount: number | null;

  @Column("varchar", { name: "DIPETHECODE", nullable: true, length: 5 })
  dipethecode: string | null;

  @Column("int", { name: "COLIDCOLLECTOR", nullable: true })
  colidcollector: number | null;

  @Column("varchar", { name: "DEHCODE", nullable: true, length: 15 })
  dehcode: string | null;

  @Column("varchar", { name: "OCCUPATION", nullable: true, length: 50 })
  occupation: string | null;

  @Column("int", { name: "CDOYID", nullable: true })
  cdoyid: number | null;

  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;

  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Column("varchar", {
    name: "GASSTATIONLICENSENUM",
    nullable: true,
    length: 7,
  })
  gasstationlicensenum: string | null;

  @Column("varchar", {
    name: "VESSELOPERATIONNUMBER",
    nullable: true,
    length: 50,
  })
  vesseloperationnumber: string | null;

  @Column("datetime", { name: "VESSELOPERATIONDATE", nullable: true })
  vesseloperationdate: Date | null;

  @Column("int", { name: "VESSELOPERATIONDOY", nullable: true })
  vesseloperationdoy: number | null;

  @Column("varchar", {
    name: "VESSELOPERATIONDATA",
    nullable: true,
    length: 50,
  })
  vesseloperationdata: string | null;

  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Column("varchar", {
    name: "UBLACCTCUSTOMERPARTYID",
    nullable: true,
    length: 20,
  })
  ublacctcustomerpartyid: string | null;

  @ManyToOne(() => Customer, (customer) => customer.custaddresses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Customer;

  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.custaddresses)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @ManyToOne(() => Country, (country) => country.custaddresses)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;
}
