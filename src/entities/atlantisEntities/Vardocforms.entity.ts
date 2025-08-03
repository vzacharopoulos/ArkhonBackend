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
import { Docforms } from "./Docforms.entity";
import { Vardocformslines } from "./Vardocformslines.entity";

@Index("UNI_5738", ["codeid", "dfmid"], { unique: true })
@Index("UNI_5748", ["id"], { unique: true })
@ObjectType()
@Entity("VARDOCFORMS", { schema: "dbo" })
export class Vardocforms {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { primary: true, name: "DFMID" })
  dfmid: number;

  @Column("int", { name: "TEAMELPID", nullable: true })
  teamelpid: number | null;

  @ManyToOne(() => Docforms, (docforms) => docforms.vardocforms, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Docforms;

  @OneToMany(
    () => Vardocformslines,
    (vardocformslines) => vardocformslines.vardocformidtotals
  )
  vardocformslines: Vardocformslines[];

  @OneToMany(
    () => Vardocformslines,
    (vardocformslines) => vardocformslines.vardocform
  )
  vardocformslines2: Vardocformslines[];

  @OneToMany(
    () => Vardocformslines,
    (vardocformslines) => vardocformslines.link
  )
  vardocformslines3: Vardocformslines[];
}
