import { Column, Entity } from "typeorm";

@Entity("C_DOY", { schema: "dbo" })
export class CDoy {
  @Column("varchar", { name: "CODE", nullable: true, length: 50 })
  code: string | null;

  @Column("int", { name: "DOYID", nullable: true })
  doyid: number | null;
}
