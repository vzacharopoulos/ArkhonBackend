import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Eurosystemlistshd } from "./Eurosystemlistshd";

@Index("UNI_18196", ["id"], { unique: true })
@Index("UNI_18204", ["code", "eslihdid"], { unique: true })
@Entity("EUROSYSTEMLISTSDT", { schema: "dbo" })
export class Eurosystemlistsdt {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "ESLIHDID", unique: true })
  eslihdid: number;

  @Column("varchar", { name: "CODE", unique: true, length: 5 })
  code: string;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("datetime", { name: "TIMESTAMP" })
  timestamp: Date;

  @Column("varchar", { name: "DEINSTRUCTIONS", nullable: true })
  deinstructions: string | null;

  @ManyToOne(
    () => Eurosystemlistshd,
    (eurosystemlistshd) => eurosystemlistshd.eurosystemlistsdts,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "ESLIHDID", referencedColumnName: "id" }])
  eslihd: Eurosystemlistshd;
}
