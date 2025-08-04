import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Vatcategory } from "./Vatcategory.entity";

@Index("UNI_722", ["comid", "vtcid"], { unique: true })
@ObjectType()
@Entity("VATGL", { schema: "dbo" })
export class Vatgl {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "VTCID" })
  vtcid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT000", nullable: true, length: 25 })
  glaccount000: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT001", nullable: true, length: 25 })
  glaccount001: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT002", nullable: true, length: 25 })
  glaccount002: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT003", nullable: true, length: 25 })
  glaccount003: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT010", nullable: true, length: 25 })
  glaccount010: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT011", nullable: true, length: 25 })
  glaccount011: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT012", nullable: true, length: 25 })
  glaccount012: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT013", nullable: true, length: 25 })
  glaccount013: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT020", nullable: true, length: 25 })
  glaccount020: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT021", nullable: true, length: 25 })
  glaccount021: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT022", nullable: true, length: 25 })
  glaccount022: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT023", nullable: true, length: 25 })
  glaccount023: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT030", nullable: true, length: 25 })
  glaccount030: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT031", nullable: true, length: 25 })
  glaccount031: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT032", nullable: true, length: 25 })
  glaccount032: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT033", nullable: true, length: 25 })
  glaccount033: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT040", nullable: true, length: 25 })
  glaccount040: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT041", nullable: true, length: 25 })
  glaccount041: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT042", nullable: true, length: 25 })
  glaccount042: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT043", nullable: true, length: 25 })
  glaccount043: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT050", nullable: true, length: 25 })
  glaccount050: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT051", nullable: true, length: 25 })
  glaccount051: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT052", nullable: true, length: 25 })
  glaccount052: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT053", nullable: true, length: 25 })
  glaccount053: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT060", nullable: true, length: 25 })
  glaccount060: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT061", nullable: true, length: 25 })
  glaccount061: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT062", nullable: true, length: 25 })
  glaccount062: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT063", nullable: true, length: 25 })
  glaccount063: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT070", nullable: true, length: 25 })
  glaccount070: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT071", nullable: true, length: 25 })
  glaccount071: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT072", nullable: true, length: 25 })
  glaccount072: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT073", nullable: true, length: 25 })
  glaccount073: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT080", nullable: true, length: 25 })
  glaccount080: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT081", nullable: true, length: 25 })
  glaccount081: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT082", nullable: true, length: 25 })
  glaccount082: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT083", nullable: true, length: 25 })
  glaccount083: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT090", nullable: true, length: 25 })
  glaccount090: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT091", nullable: true, length: 25 })
  glaccount091: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT092", nullable: true, length: 25 })
  glaccount092: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT093", nullable: true, length: 25 })
  glaccount093: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT100", nullable: true, length: 25 })
  glaccount100: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT101", nullable: true, length: 25 })
  glaccount101: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT102", nullable: true, length: 25 })
  glaccount102: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "GLACCOUNT103", nullable: true, length: 25 })
  glaccount103: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Vatcategory, (vatcategory) => vatcategory.vatgls, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Vatcategory;
}
