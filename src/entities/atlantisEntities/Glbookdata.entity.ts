import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_6494", ["id"], { unique: true })
@Index("UNI_6496", ["comid", "booktype"], { unique: true })
@ObjectType()
@Entity("GLBOOKDATA", { schema: "dbo" })
export class Glbookdata {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "BOOKTYPE", unique: true })
  booktype: number;

  @Field({ nullable: true })
  @Column("int", { name: "LASTPAGE", default: () => "0" })
  lastpage: number;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTPRINTDATE", nullable: true })
  lastprintdate: Date | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LASTPRINTPERIOD", nullable: true, length: 50 })
  lastprintperiod: string | null;
}
