import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("temp", { schema: "dbo" })
export class Temp {
  @PrimaryColumn("nchar", { name: "temp", nullable: false, length: 50 })
  temp: string | null;

  @Field({ nullable: true })
  @Column("decimal", { name: "price", nullable: true, precision: 18, scale: 2 })
  price: number | null;
}
