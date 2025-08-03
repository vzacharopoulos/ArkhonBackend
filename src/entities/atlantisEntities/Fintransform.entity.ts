import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fintrade } from "./Fintrade.entity";

@Index("UNI_5382", ["sourceid", "destid", "domaintype"], { unique: true })
@Index("UNIX_1026", ["destid", "sourceid", "domaintype"], {})
@ObjectType()
@Entity("FINTRANSFORM", { schema: "dbo" })
export class Fintransform {
  @Column("int", { primary: true, name: "SOURCEID" })
  sourceid: number;

  @Column("int", { primary: true, name: "DESTID" })
  destid: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("datetime", { name: "DESTDATE" })
  destdate: Date;

  @Column("varchar", { name: "SOURCETRADECODE", nullable: true, length: 30 })
  sourcetradecode: string | null;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.fintransforms, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DESTID", referencedColumnName: "id" }])
  dest: Fintrade;
}
