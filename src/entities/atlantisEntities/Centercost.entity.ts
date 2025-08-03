import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Presource } from "./Presource.entity";

@Index("UNI_3828", ["comid", "codeid"], { unique: true })
@ObjectType()
@Entity("CENTERCOST", { schema: "dbo" })
export class Centercost {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;

  @Column("varchar", { name: "ACCMASK", nullable: true, length: 25 })
  accmask: string | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 25 })
  abcmask: string | null;



  @OneToMany(() => Presource, (presource) => presource.centercost)
  presources: Presource[];
}
