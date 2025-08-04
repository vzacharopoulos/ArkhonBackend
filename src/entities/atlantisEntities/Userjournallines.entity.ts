import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Acceventtype } from "./Acceventtype.entity";
import { Userjournal } from "./Userjournal.entity";

@Index("UNI_1006", ["comid", "usjid", "aetid"], { unique: true })
@ObjectType()
@Entity("USERJOURNALLINES", { schema: "dbo" })
export class Userjournallines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "AETID" })
  aetid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "USJID" })
  usjid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @ManyToOne(
    () => Acceventtype,
    (acceventtype) => acceventtype.userjournallines
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @Field({ nullable: true })
  @ManyToOne(() => Userjournal, (userjournal) => userjournal.userjournallines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Userjournal;
}
