import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SPECIFICATION_PK", ["recId"], { unique: true })
@ObjectType()
@Entity("KEF_SPECIFICATION", { schema: "dbo" })
export class KefSpecification {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "REC_ID" })
  recId: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "ITEID", nullable: true })
  iteid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FROMDATE", nullable: true })
  fromdate: Date | null;

  @Field({ nullable: true })
  @Column("float", { name: "PRIMARYQTY", nullable: true, precision: 53 })
  primaryqty: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "WASTE", nullable: true, precision: 53 })
  waste: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("text", { name: "REMARKS", nullable: true })
  remarks: string | null;
}
