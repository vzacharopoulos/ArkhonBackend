import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Taxfee } from "./Taxfee.entity";

@Index("UNI_15478", ["code", "domaintype", "fyeid"], { unique: true })
@ObjectType()
@Entity("TAXFEEHIST", { schema: "dbo" })
export class Taxfeehist {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODE" })
  code: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Taxfee, (taxfee) => taxfee.taxfeehists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "CODE", referencedColumnName: "code" },
    { name: "DOMAINTYPE", referencedColumnName: "domaintype" },
  ])
  taxfee: Taxfee;
}
