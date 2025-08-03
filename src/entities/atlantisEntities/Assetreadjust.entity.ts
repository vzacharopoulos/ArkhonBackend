import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Assettrans } from "./Assettrans.entity";

@Index("UNI_5892", ["codeid"], { unique: true })
@ObjectType()
@Entity("ASSETREADJUST", { schema: "dbo" })
export class Assetreadjust {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("float", { name: "COEF", nullable: true, precision: 53 })
  coef: number | null;

  @OneToMany(() => Assettrans, (assettrans) => assettrans.arj)
  assettrans: Assettrans[];
}
