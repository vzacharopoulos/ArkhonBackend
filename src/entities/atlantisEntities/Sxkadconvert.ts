import { Column, Entity, Index } from "typeorm";

@Index("UNI_15464", ["oldcode"], { unique: true })
@Entity("SXKADCONVERT", { schema: "dbo" })
export class Sxkadconvert {
  @Column("varchar", { primary: true, name: "OLDCODE", length: 25 })
  oldcode: string;

  @Column("varchar", { name: "NEWCODE", length: 25 })
  newcode: string;
}
