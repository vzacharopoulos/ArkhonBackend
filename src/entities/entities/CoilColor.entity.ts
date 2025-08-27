import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coils } from "./Coils.entity";
import { Field, Int } from "@nestjs/graphql";

@Index("PK_Color", ["code"], { unique: true })
@Entity("Coil_Color", { schema: "dbo" })
export class CoilColor {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id" })
  id: number;

  @Field(() => String)
  @Column("nchar", { primary: true, name: "code", length: 3 })
  code: string;

  @Field(() => String, { nullable: true })
  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Field(() => String, { nullable: true })
  @Column("nchar", { name: "description", nullable: true, length: 40 })
  description: string | null;

  @Field(() => String, { nullable: true })
  @Column("nvarchar", { name: "hexcode", nullable: true, length: 50 })
  hexcode: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "priority", nullable: true })
  priority: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "groupid", nullable: true })
  groupid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "isActive", nullable: true })
  isActive: number | null;

  @Column("int", { name: "isPVC", nullable: true })
  isPvc: number | null;

//   @Field(() => [Coils], { nullable: true })
//   @OneToMany(() => Coils, (coil) => coil.colorRef)
//   coils: Coils[];
  
// 
}
