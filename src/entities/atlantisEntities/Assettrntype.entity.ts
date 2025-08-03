import { Column, Entity, Index, OneToMany } from "typeorm";
import { Assettrans } from "./Assettrans.entity";
import { Fincustdoctype } from "./Fincustdoctype.entity";
import { Finstoredoctype } from "./Finstoredoctype.entity";
import { Finsupdoctype } from "./Finsupdoctype.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5628", ["comid", "codeid"], { unique: true })
@Entity("ASSETTRNTYPE", { schema: "dbo" })
export class Assettrntype {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("int", { name: "ASSETNATURE" })
  assetnature: number;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("smallint", { name: "DPADOMAIN", nullable: true, default: () => "0" })
  dpadomain: number | null;

  @Column("varchar", { name: "DEFJUSTIFICATION", nullable: true, length: 255 })
  defjustification: string | null;

  @Column("smallint", { name: "ISFISCAL", default: () => "1" })
  isfiscal: number;

  @Column("smallint", { name: "ISIAS", default: () => "0" })
  isias: number;

  @OneToMany(() => Assettrans, (assettrans) => assettrans.assettrntype)
  assettrans: Assettrans[];

  @OneToMany(
    () => Fincustdoctype,
    (fincustdoctype) => fincustdoctype.assettrntype
  )
  fincustdoctypes: Fincustdoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.assettrntype
  )
  finstoredoctypes: Finstoredoctype[];

  @OneToMany(
    () => Finstoredoctype,
    (finstoredoctype) => finstoredoctype.assettrntype2
  )
  finstoredoctypes2: Finstoredoctype[];

  @OneToMany(() => Finsupdoctype, (finsupdoctype) => finsupdoctype.assettrntype)
  finsupdoctypes: Finsupdoctype[];
}
