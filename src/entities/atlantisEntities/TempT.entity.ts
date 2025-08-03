import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("tempT", { schema: "dbo" })
export class TempT {
  @PrimaryColumn("nvarchar", { name: "TableName", length: 128 })
  tableName: string;
}
