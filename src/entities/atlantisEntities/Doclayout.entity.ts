import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNI_5706", ["id"], { unique: true })
@Index("UNI_6410", ["comid", "codeid", "domaintype", "usrid", "grpid"], {
  unique: true,
})
@ObjectType()
@Entity("DOCLAYOUT", { schema: "dbo" })
export class Doclayout {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "CODEID", unique: true })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "DOMAINTYPE", unique: true })
  domaintype: number;



  @Field({ nullable: true })
  @Column("int", {
    name: "USRID",
    nullable: true,
    unique: true,
    default: () => "0",
  })
  usrid: number | null;

  @Field({ nullable: true })
  @Column("int", {
    name: "GRPID",
    nullable: true,
    unique: true,
    default: () => "0",
  })
  grpid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "ORDERFLD", nullable: true, length: 50 })
  orderfld: string | null;
}
