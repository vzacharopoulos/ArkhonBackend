import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Loaderlines", { schema: "dbo" })
export class Loaderlines {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nchar", { name: "LoaderNo", length: 10 })
  loaderNo: string;

  @Column("nchar", { name: "MaterialID", length: 10 })
  materialId: string;

  @Column("nchar", { name: "QTYtype", length: 10 })
  qtYtype: string;

  @Column("int", { name: "QTY" })
  qty: number;

  @Column("int", { name: "status" })
  status: number;
}
