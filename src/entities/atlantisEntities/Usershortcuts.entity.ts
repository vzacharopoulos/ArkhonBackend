import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Puser } from "./Puser.entity";

@Index("UNI_6462", ["usrid", "actid"], { unique: true })
@ObjectType()
@Entity("USERSHORTCUTS", { schema: "dbo" })
export class Usershortcuts {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "USRID" })
  usrid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "ACTID" })
  actid: number;

  @Field({ nullable: true })
  @Column("int", { name: "USHORTCUT", nullable: true })
  ushortcut: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Puser, (puser) => puser.usershortcuts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "USRID", referencedColumnName: "id" }])
  usr: Puser;
}
