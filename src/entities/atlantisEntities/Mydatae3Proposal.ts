import { Column, Entity, Index } from "typeorm";

@Index("UNI_18304", ["code", "catid"], { unique: true })
@Entity("MYDATAE3PROPOSAL", { schema: "dbo" })
export class Mydatae3Proposal {
  @Column("varchar", { name: "CODE", unique: true, length: 50 })
  code: string;

  @Column("int", { name: "CATID", nullable: true, unique: true })
  catid: number | null;

  @Column("varchar", { name: "NEW_CODE", length: 50 })
  newCode: string;
}
