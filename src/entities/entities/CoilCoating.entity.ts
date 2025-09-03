import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";

@Index("PK_Coating", ["code"], { unique: true })
@Entity("Coil_Coating", { schema: "dbo" })
@ObjectType()
export class CoilCoating {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Field()
  @Column("nchar", { primary: true, name: "code", length: 2 })
  code: string;

  @Field({ nullable: true })
  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "description", nullable: true, length: 20 })
  description: string | null;
}
