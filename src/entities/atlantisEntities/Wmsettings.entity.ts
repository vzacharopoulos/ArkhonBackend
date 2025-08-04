import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_2020", ["name"], { unique: true })
@ObjectType()
@Entity("WMSETTINGS", { schema: "dbo" })
export class Wmsettings {
  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "NAME", length: 100 })
  name: string;

  @Field({ nullable: true })
  @Column("datetime", { name: "UPDDATE", nullable: true })
  upddate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "UPDUSER", nullable: true })
  upduser: number | null;

  
}
