import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Paymentterms } from "./Paymentterms";
import { Reliability } from "./Reliability";

@Index("UNI_5018", ["id"], { unique: true })
@Entity("RELIABLINES", { schema: "dbo" })
export class Reliablines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "RLBID", nullable: true })
  rlbid: number | null;

  @Column("int", { name: "TRADEID", nullable: true })
  tradeid: number | null;

  @ManyToOne(() => Paymentterms, (paymentterms) => paymentterms.reliablines)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "PTRID", referencedColumnName: "codeid" },
  ])
  paymentterms: Paymentterms;

  @ManyToOne(() => Reliability, (reliability) => reliability.reliablines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Reliability;
}
