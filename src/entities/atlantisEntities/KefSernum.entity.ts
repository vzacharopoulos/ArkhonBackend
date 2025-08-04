import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("KEF_SERNUM_PK", ["iteid", "sernum"], { unique: true })
@ObjectType()
@Entity("KEF_SERNUM", { schema: "dbo" })
export class KefSernum {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "ITEID" })
  iteid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "SERNUM", length: 50 })
  sernum: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "ITECODE", nullable: true, length: 25 })
  itecode: string | null;

  @Field({ nullable: true })
  @Column("int", { name: "STOID", nullable: true })
  stoid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;
}
