import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("UNI_6180", ["id"], { unique: true })
@Index("UNI_6310", ["tblname", "fldname"], { unique: true })
@Entity("FIELDSTOEURO", { schema: "dbo" })
export class Fieldstoeuro {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "TBLNAME", unique: true, length: 50 })
  tblname: string;

  @Column("varchar", { name: "FLDNAME", unique: true, length: 50 })
  fldname: string;

  @Column("varchar", { name: "EXTRAWHERE", nullable: true })
  extrawhere: string | null;

  @Column("smallint", { name: "ISREADONLY", default: () => "0" })
  isreadonly: number;

  @Column("smallint", { name: "STATUS", default: () => "0" })
  status: number;

  @Column("smallint", { name: "DEFAULTSTATUS", default: () => "0" })
  defaultstatus: number;

  @Column("smallint", { name: "DECIMALS", default: () => "2" })
  decimals: number;


}
