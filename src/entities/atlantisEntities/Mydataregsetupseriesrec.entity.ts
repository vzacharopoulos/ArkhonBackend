import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index } from "typeorm";

@Index("UNI_18278", ["aadecode"], { unique: true })
@ObjectType()
@Entity("MYDATAREGSETUPSERIESREC", { schema: "dbo" })
export class Mydataregsetupseriesrec {
  @Column("varchar", { primary: true, name: "AADECODE", length: 20 })
  aadecode: string;

  @Column("varchar", { name: "DESCR", nullable: true, length: 70 })
  descr: string | null;

  @Column("smallint", { name: "DCISSUSER", nullable: true })
  dcissuser: number | null;

  @Column("smallint", { name: "SINGISSUER", nullable: true })
  singissuer: number | null;

  @Column("smallint", { name: "DCCOUNTERPART", nullable: true })
  dccounterpart: number | null;

  @Column("smallint", { name: "SINGCOUNTERPART", nullable: true })
  singcounterpart: number | null;

  @Column("smallint", { name: "CLASSISSUER", nullable: true })
  classissuer: number | null;

  @Column("smallint", { name: "DSRIDISSUSERFLAG", nullable: true })
  dsridissuserflag: number | null;

  @Column("smallint", { name: "DSRIDCOUNTERPARTFLAG", nullable: true })
  dsridcounterpartflag: number | null;

  @Column("varchar", { name: "ENTITYSERIES", nullable: true, length: 15 })
  entityseries: string | null;

  @Column("varchar", { name: "ENTITYSERIESTRADER", nullable: true, length: 15 })
  entityseriestrader: string | null;

  @Column("varchar", { name: "THIRDPARTYSERIES", nullable: true, length: 15 })
  thirdpartyseries: string | null;

  @Column("varchar", {
    name: "THIRDPARTYSERIESTRADER",
    nullable: true,
    length: 15,
  })
  thirdpartyseriestrader: string | null;
}
