import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company.entity";

@Index("UNI_6598", ["comid"], { unique: true })
@ObjectType()
@Entity("RETAILPARAMSEXT", { schema: "dbo" })
export class Retailparamsext {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;



  @OneToOne(() => Company, (company) => company.retailparamsext, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
