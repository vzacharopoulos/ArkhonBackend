import { Column, Entity } from "typeorm";

@Entity("tempT", { schema: "dbo" })
export class TempT {
  @Column("nvarchar", { name: "TableName", length: 128 })
  tableName: string;
}
