import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Puser } from "./Puser.entity";

@Index("UNI_5904", ["usrid", "comid", "braid"], { unique: true })
@ObjectType()
@Entity("USERLOGININFO", { schema: "dbo" })
export class Userlogininfo {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "USRID" })
  usrid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "BRAID", default: () => "0" })
  braid: number;

  @Field({ nullable: true })
  @ManyToOne(() => Puser, (puser) => puser.userlogininfos, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "USRID", referencedColumnName: "id" }])
  usr: Puser;
}
