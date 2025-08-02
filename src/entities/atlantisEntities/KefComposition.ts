import { Column, Entity, Index } from "typeorm";

@Index("KEF_COMPOSITION_PK", ["iteid", "prlinetype", "iteidcomponent"], {
  unique: true,
})
@Entity("KEF_COMPOSITION", { schema: "dbo" })
export class KefComposition {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("float", { primary: true, name: "PRLINETYPE", precision: 53 })
  prlinetype: number;

  @Column("int", { primary: true, name: "ITEIDCOMPONENT" })
  iteidcomponent: number;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("varchar", { name: "ITECODECOMPONENT", nullable: true, length: 25 })
  itecodecomponent: string | null;

  @Column("float", { name: "COMPONENTQTY", nullable: true, precision: 53 })
  componentqty: number | null;

  @Column("float", { name: "LINETYPE", nullable: true, precision: 53 })
  linetype: number | null;
}
