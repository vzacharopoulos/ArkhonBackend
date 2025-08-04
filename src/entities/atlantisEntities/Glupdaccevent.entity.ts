import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Glupdatestruct } from "./Glupdatestruct.entity";
import { Glupdacceventlines } from "./Glupdacceventlines.entity";

@Index("UNI_5370", ["comid", "domaintype", "gusid", "linenum"], {
  unique: true,
})
@Index("UNI_5374", ["id"], { unique: true })
@ObjectType()
@Entity("GLUPDACCEVENT", { schema: "dbo" })
export class Glupdaccevent {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "GUSID" })
  gusid: number;

  @Field({ nullable: true })
  @Column("smallint", { primary: true, name: "LINENUM" })
  linenum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Field({ nullable: true })
  @Column("int", { name: "DSRID" })
  dsrid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Glupdatestruct,
    (glupdatestruct) => glupdatestruct.glupdaccevents,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Glupdatestruct;

  @Field(() => [Glupdacceventlines], { nullable: true })
  @OneToMany(
    () => Glupdacceventlines,
    (glupdacceventlines) => glupdacceventlines.link
  )
  glupdacceventlines: Glupdacceventlines[];
}
