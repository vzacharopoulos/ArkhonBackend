import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_5350", ["id"], { unique: true })
@ObjectType()
@Entity("USERRIGHTS", { schema: "dbo" })
export class Userrights {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { name: "DOMAINID" })
  domainid: number;



  @Field({ nullable: true })
  @Column("int", { name: "DOMCOMID", nullable: true })
  domcomid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "PROGID", nullable: true })
  progid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 100 })
  descr: string | null;
}
