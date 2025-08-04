import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("UNI_18304", ["code", "catid"], { unique: true })
@ObjectType()
@Entity("MYDATAE3PROPOSAL", { schema: "dbo" })
export class Mydatae3Proposal {
  @PrimaryColumn("varchar", { name: "CODE", unique: true, length: 50 })
  code: string;

  @Field({ nullable: true })
  @Column("int", { name: "CATID", nullable: true, unique: true })
  catid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "NEW_CODE", length: 50 })
  newCode: string;
}
