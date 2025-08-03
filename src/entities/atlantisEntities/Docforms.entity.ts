import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Calcdocforms } from "./Calcdocforms.entity";
import { Uservardocforms } from "./Uservardocforms.entity";
import { Uservardocformsmessages } from "./Uservardocformsmessages.entity";
import { Vardocforms } from "./Vardocforms.entity";
import { Vardocformslines } from "./Vardocformslines.entity";

@Index("UNI_5736_1", ["codeid", "domaintype"], { unique: true })
@Index("UNI_5746", ["id"], { unique: true })
@ObjectType()
@Entity("DOCFORMS", { schema: "dbo" })
export class Docforms {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Column("int", { name: "PRTID", nullable: true })
  prtid: number | null;

  @Column("smallint", { name: "FRMTYPE", nullable: true, default: () => "0" })
  frmtype: number | null;

  @Column("smallint", { primary: true, name: "DOMAINTYPE", default: () => "0" })
  domaintype: number;

  @Column("smallint", { name: "PREVFYEID", default: () => "0" })
  prevfyeid: number;

  @Column("smallint", { name: "ACCDATASOURCE", default: () => "0" })
  accdatasource: number;

  @Column("int", { name: "CLOSEDDOCID", nullable: true })
  closeddocid: number | null;

  @Column("varchar", { name: "INTERNALSTR", nullable: true, length: 255 })
  internalstr: string | null;

  @Column("int", { name: "PRTID2", nullable: true })
  prtid2: number | null;

  @Column("smallint", { name: "ISBALANCE", default: () => "(0)" })
  isbalance: number;

  @OneToMany(() => Calcdocforms, (calcdocforms) => calcdocforms.dfm)
  calcdocforms: Calcdocforms[];

  @OneToMany(() => Uservardocforms, (uservardocforms) => uservardocforms.dfm)
  uservardocforms: Uservardocforms[];

  @OneToMany(
    () => Uservardocformsmessages,
    (uservardocformsmessages) => uservardocformsmessages.dfm
  )
  uservardocformsmessages: Uservardocformsmessages[];

  @OneToMany(() => Vardocforms, (vardocforms) => vardocforms.link)
  vardocforms: Vardocforms[];

  @OneToMany(
    () => Vardocformslines,
    (vardocformslines) => vardocformslines.docform
  )
  vardocformslines: Vardocformslines[];
}
