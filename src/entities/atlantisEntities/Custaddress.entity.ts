import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customer } from "./Customer.entity";
import { Geogrpos } from "./Geogrpos.entity";
import { Country } from "./Country.entity";

@Index("UNI_2100", ["id"], { unique: true })
@ObjectType()
@Entity("CUSTADDRESS", { schema: "dbo" })
export class Custaddress {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", length: 15 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "CONTACTPERSON", nullable: true, length: 25 })
  contactperson: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 200 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DISTRICT", nullable: true, length: 50 })
  district: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "FPASTATUS", default: () => "0" })
  fpastatus: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "FAXNUMBER", nullable: true, length: 20 })
  faxnumber: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE1", nullable: true, length: 20 })
  phone1: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "PHONE2", nullable: true, length: 20 })
  phone2: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "STREET", nullable: true, length: 50 })
  street: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TELEX", nullable: true, length: 20 })
  telex: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ZIPCODE", nullable: true, length: 10 })
  zipcode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "PTRID", nullable: true })
  ptrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "SHVID", nullable: true })
  shvid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "COLIDSALESMAN", nullable: true })
  colidsalesman: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE1", nullable: true, precision: 53 })
  expvalue1: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "EXPVALUE2", nullable: true, precision: 53 })
  expvalue2: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CARID", nullable: true })
  carid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "TRSID", nullable: true })
  trsid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "ROTID", nullable: true })
  rotid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "REMARKS", nullable: true })
  remarks: string | null;

  @Field({ nullable: true })
  @Column("float", {
    name: "DEFAULTDISCOUNT",
    nullable: true,
    precision: 53,
    default: () => "0",
  })
  defaultdiscount: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DIPETHECODE", nullable: true, length: 5 })
  dipethecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "COLIDCOLLECTOR", nullable: true })
  colidcollector: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DEHCODE", nullable: true, length: 15 })
  dehcode: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "OCCUPATION", nullable: true, length: 50 })
  occupation: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "CDOYID", nullable: true })
  cdoyid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CITY", nullable: true, length: 30 })
  city: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "TAXFREEID", nullable: true })
  taxfreeid: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "GASSTATIONLICENSENUM",
    nullable: true,
    length: 7,
  })
  gasstationlicensenum: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "VESSELOPERATIONNUMBER",
    nullable: true,
    length: 50,
  })
  vesseloperationnumber: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "VESSELOPERATIONDATE", nullable: true })
  vesseloperationdate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "VESSELOPERATIONDOY", nullable: true })
  vesseloperationdoy: number | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "VESSELOPERATIONDATA",
    nullable: true,
    length: 50,
  })
  vesseloperationdata: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLN", nullable: true, length: 20 })
  gln: string | null;

  @Field({ nullable: true })
  @Column("varchar", {
    name: "UBLACCTCUSTOMERPARTYID",
    nullable: true,
    length: 20,
  })
  ublacctcustomerpartyid: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Customer, (customer) => customer.custaddresses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Customer;

  @Field({ nullable: true })
  @ManyToOne(() => Geogrpos, (geogrpos) => geogrpos.custaddresses)
  @JoinColumn([{ name: "GEOID", referencedColumnName: "codeid" }])
  geo: Geogrpos;

  @Field({ nullable: true })
  @ManyToOne(() => Country, (country) => country.custaddresses)
  @JoinColumn([{ name: "CNTID", referencedColumnName: "codeid" }])
  cnt: Country;
}
