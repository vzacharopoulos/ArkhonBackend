import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Company } from "./Company";

@Index("UNI_6598", ["comid"], { unique: true })
@Entity("RETAILPARAMSEXT", { schema: "dbo" })
export class Retailparamsext {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varbinary", { name: "CUSTSEARCHDATA", nullable: true })
  custsearchdata: Buffer | null;

  @OneToOne(() => Company, (company) => company.retailparamsext, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;
}
