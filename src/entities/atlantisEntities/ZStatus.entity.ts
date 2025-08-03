import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("Z_STATUS", { schema: "dbo" })
export class ZStatus {
  @PrimaryColumn("smallint", { name: "ID"})
  id: number | null;

  @Column("varchar", { name: "DESCR", nullable: true, length: 50 })
  descr: string | null;
}
