import { Column, Entity } from "typeorm";

@Entity("PROBLEMDOCS", { schema: "dbo" })
export class Problemdocs {
  @Column("int", { name: "FTRID", nullable: true })
  ftrid: number | null;

  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;
}
