import { Column, Entity } from "typeorm";

@Entity("Package", { schema: "dbo" })
export class Package {
  @Column("smallint", { name: "id", nullable: true })
  id: number | null;
}
