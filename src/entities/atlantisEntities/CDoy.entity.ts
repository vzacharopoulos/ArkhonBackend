import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("C_DOY", { schema: "dbo" })
export class CDoy {
  @PrimaryColumn("varchar", { name: "CODE", nullable: false, length: 50 })
  code: string | null;

  @Column("int", { name: "DOYID", nullable: true })
  doyid: number | null;
}
