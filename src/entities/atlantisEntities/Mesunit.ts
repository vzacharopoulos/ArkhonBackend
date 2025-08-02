import { Column, Entity, Index, OneToMany } from "typeorm";
import { Material } from "./Material";

@Index("UNI_5192", ["codeid"], { unique: true })
@Entity("MESUNIT", { schema: "dbo" })
export class Mesunit {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "CODE", length: 25 })
  code: string;

  @Column("varchar", { name: "EDICODE", nullable: true, length: 10 })
  edicode: string | null;

  @Column("smallint", { name: "DECIMALS", nullable: true, default: () => "0" })
  decimals: number | null;

  @Column("int", { name: "MYDATACODE", nullable: true })
  mydatacode: number | null;

  @Column("varchar", {
    name: "UBLINVOICEDQTYUNITCODE",
    nullable: true,
    length: 5,
  })
  ublinvoicedqtyunitcode: string | null;

  @Column("datetime", {
    name: "LASTMODIFIED",
    nullable: true,
    default: () => "getutcdate()",
  })
  lastmodified: Date | null;

  @OneToMany(() => Material, (material) => material.mu)
  materials: Material[];

  @OneToMany(() => Material, (material) => material.mu2)
  materials2: Material[];

  @OneToMany(() => Material, (material) => material.mu3)
  materials3: Material[];

  @OneToMany(() => Material, (material) => material.mu4)
  materials4: Material[];


}
