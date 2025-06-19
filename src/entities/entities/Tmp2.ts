import { Column, Entity, Index } from "typeorm";

@Index("PK_tmp2", ["coilno"], { unique: true })
@Entity("tmp2", { schema: "dbo" })
export class Tmp2 {
  @Column("nvarchar", { primary: true, name: "coilno", length: 50 })
  coilno: string;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;
}
