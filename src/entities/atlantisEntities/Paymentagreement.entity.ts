import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fintrade } from "./Fintrade.entity";

@Index("UNI_3434_1", ["ftrid", "duedate", "fundtype"], { unique: true })
@ObjectType()
@Entity("PAYMENTAGREEMENT", { schema: "dbo" })
export class Paymentagreement {
  @Column("int", { primary: true, name: "FTRID" })
  ftrid: number;

  @Column("datetime", { primary: true, name: "DUEDATE" })
  duedate: Date;

  @Column("int", { name: "COMID" })
  comid: number;

  @Column("float", { name: "AMOUNTTOBEPAYED", precision: 53 })
  amounttobepayed: number;

  @Column("smallint", { primary: true, name: "FUNDTYPE", default: () => "0" })
  fundtype: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("int", { name: "LINENUM", nullable: true })
  linenum: number | null;

  @ManyToOne(() => Fintrade, (fintrade) => fintrade.paymentagreements, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "FTRID", referencedColumnName: "id" }])
  ftr: Fintrade;
}
