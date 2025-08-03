import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_1674", ["codeid"], { unique: true })
@ObjectType()
@Entity("WEBPAYMENT", { schema: "dbo" })
export class Webpayment {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "PAYDATADEF", nullable: true })
  paydatadef: string | null;


}
