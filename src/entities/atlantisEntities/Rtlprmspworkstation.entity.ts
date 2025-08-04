import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_5950", ["wstid", "comid"], { unique: true })
@ObjectType()
@Entity("RTLPRMSPWORKSTATION", { schema: "dbo" })
export class Rtlprmspworkstation {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "WSTID" })
  wstid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { name: "CSHID", nullable: true })
  cshid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RTLDSRID", nullable: true })
  rtldsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RTLORDERDSRID", nullable: true })
  rtlorderdsrid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "RTLPOSID", nullable: true })
  rtlposid: number | null;

  @Field({ nullable: true })
  @Column("int", { name: "CUSID", nullable: true })
  cusid: number | null;
}
