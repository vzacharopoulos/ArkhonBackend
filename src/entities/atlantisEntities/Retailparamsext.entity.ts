import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_6598", ["comid"], { unique: true })
@ObjectType()
@Entity("RETAILPARAMSEXT", { schema: "dbo" })
export class Retailparamsext {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;



  @Field({ nullable: true })
  @OneToOne(() => Company, (company) => company.retailparamsext, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
