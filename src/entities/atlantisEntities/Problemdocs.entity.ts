import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity("PROBLEMDOCS", { schema: "dbo" })
export class Problemdocs {
  @PrimaryColumn("int", { name: "FTRID" })
  ftrid: number | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "SOURCE", nullable: true })
  source: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", nullable: true })
  domaintype: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PERID", nullable: true })
  perid: number | null;
}
