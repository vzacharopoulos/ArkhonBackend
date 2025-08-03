import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Glupdaccevent } from "./Glupdaccevent.entity";

@Index("UNI_5376", ["id"], { unique: true })
@ObjectType()
@Entity("GLUPDACCEVENTLINES", { schema: "dbo" })
export class Glupdacceventlines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("smallint", { name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { name: "GUSID" })
  gusid: number;

  @Column("int", { name: "LINENUM" })
  linenum: number;

  @Column("varchar", { name: "ACCMASK", length: 255 })
  accmask: string;

  @Column("smallint", { name: "UPDTYPE" })
  updtype: number;

  @Column("varchar", { name: "UPDFORMULA", length: 255 })
  updformula: string;

  @Column("smallint", { name: "ISANALYSED", default: () => "0" })
  isanalysed: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("varchar", { name: "ACCMASKANAL", nullable: true, length: 255 })
  accmaskanal: string | null;

  @Column("varchar", { name: "ABCMASK", nullable: true, length: 200 })
  abcmask: string | null;

  @ManyToOne(
    () => Glupdaccevent,
    (glupdaccevent) => glupdaccevent.glupdacceventlines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Glupdaccevent;
}
