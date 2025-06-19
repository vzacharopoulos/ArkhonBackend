import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_defects", ["id", "name"], { unique: true })
@Entity("Defects", { schema: "dbo" })
export class Defects {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { primary: true, name: "name", length: 20 })
  name: string;

  @Column("nvarchar", { name: "nameGR", nullable: true })
  nameGr: string | null;

  @Column("nvarchar", { name: "description", nullable: true })
  description: string | null;

  @Column("nvarchar", { name: "imagename", nullable: true })
  imagename: string | null;

  @Column("nvarchar", { name: "imagepath", nullable: true })
  imagepath: string | null;
}
