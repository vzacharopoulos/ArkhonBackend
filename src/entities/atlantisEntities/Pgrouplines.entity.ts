import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Reliability } from "./Reliability.entity";
import { Pgroup } from "./Pgroup.entity";

@Index("UNI_6326", ["comid", "grpid"], { unique: true })
@ObjectType()
@Entity("PGROUPLINES", { schema: "dbo" })
export class Pgrouplines {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "GRPID" })
  grpid: number;

  @Field({ nullable: true })
  @ManyToOne(() => Reliability, (reliability) => reliability.pgrouplines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "RLBID", referencedColumnName: "codeid" },
  ])
  reliability: Reliability;

  @Field({ nullable: true })
  @ManyToOne(() => Pgroup, (pgroup) => pgroup.pgrouplines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "GRPID", referencedColumnName: "id" }])
  grp: Pgroup;
}
