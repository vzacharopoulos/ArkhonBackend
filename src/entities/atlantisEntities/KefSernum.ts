import { Column, Entity, Index } from "typeorm";

@Index("KEF_SERNUM_PK", ["iteid", "sernum"], { unique: true })
@Entity("KEF_SERNUM", { schema: "dbo" })
export class KefSernum {
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Column("varchar", { primary: true, name: "SERNUM", length: 50 })
  sernum: string;

  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;
}
