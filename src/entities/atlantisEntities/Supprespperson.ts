import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Supplier } from "./Supplier";

@Index("UNI_2514", ["id"], { unique: true })
@Entity("SUPPRESPPERSON", { schema: "dbo" })
export class Supprespperson {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "EMAIL", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "MOBILE", nullable: true, length: 20 })
  mobile: string | null;

  @Column("varchar", { name: "NAME", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar", { name: "PRIVATEPHONE", nullable: true, length: 20 })
  privatephone: string | null;

  @Column("varchar", { name: "REMARKS", nullable: true, length: 255 })
  remarks: string | null;

  @Column("datetime", { name: "CONSENTDATE", nullable: true })
  consentdate: Date | null;

  @ManyToOne(() => Supplier, (supplier) => supplier.suppresppeople, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "PERID", referencedColumnName: "id" }])
  per: Supplier;


}
