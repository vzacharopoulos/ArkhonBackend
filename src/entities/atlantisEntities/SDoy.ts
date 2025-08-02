import { Column, Entity } from "typeorm";

@Entity("S_DOY", { schema: "dbo" })
export class SDoy {
  @Column("varchar", { name: "CODE", nullable: true, length: 25 })
  code: string | null;

  @Column("int", { name: "DOYID", nullable: true })
  doyid: number | null;
}
