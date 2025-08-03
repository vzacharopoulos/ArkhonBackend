import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mydatalines } from "./Mydatalines.entity";

@Index("UNI_18216", ["id"], { unique: true })
@Index("UNIX_1138", ["mydatalinesid"], {})
@ObjectType()
@Entity("MYDATACLASS", { schema: "dbo" })
export class Mydataclass {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("int", { name: "MYDATALINESID" })
  mydatalinesid: number;

  @Column("varchar", {
    name: "CLASSIFICATIONRECEIPT",
    nullable: true,
    length: 64,
  })
  classificationreceipt: string | null;

  @Column("int", { name: "LINENUMBER", nullable: true })
  linenumber: number | null;

  @Column("varchar", {
    name: "CLASSIFICATIONTYPE",
    nullable: true,
    length: 120,
  })
  classificationtype: string | null;

  @Column("varchar", {
    name: "CLASSIFICATIONCATEGORY",
    nullable: true,
    length: 120,
  })
  classificationcategory: string | null;

  @Column("float", { name: "AMOUNT", nullable: true, precision: 53 })
  amount: number | null;

  @Column("int", { name: "CLASSIFICATIONID", nullable: true })
  classificationid: number | null;

  @Column("datetime", { name: "UPLOADDATE", nullable: true })
  uploaddate: Date | null;

  @Column("float", { name: "VATAMOUNT", nullable: true, precision: 53 })
  vatamount: number | null;

  @Column("int", { name: "VATCATEGORY", nullable: true })
  vatcategory: number | null;

  @Column("int", { name: "VATEXEMPTION", nullable: true })
  vatexemption: number | null;

  @ManyToOne(() => Mydatalines, (mydatalines) => mydatalines.mydataclasses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "MYDATALINESID", referencedColumnName: "id" }])
  mydatalines: Mydatalines;
}
