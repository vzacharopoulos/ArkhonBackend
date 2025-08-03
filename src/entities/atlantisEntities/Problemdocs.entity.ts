import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("PROBLEMDOCS", { schema: "dbo" })
export class Problemdocs {
  @PrimaryColumn("int", { name: "FTRID" })
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
