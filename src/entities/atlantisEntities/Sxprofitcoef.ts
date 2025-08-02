import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sxpcoefhist } from "./Sxpcoefhist";
import { Sxpcoefcategory } from "./Sxpcoefcategory";

@Index("UNI_15060", ["id"], { unique: true })
@Index("UNI_15084", ["salcode"], { unique: true })
@Entity("SXPROFITCOEF", { schema: "dbo" })
export class Sxprofitcoef {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("varchar", { name: "SALCODE", unique: true, length: 10 })
  salcode: string;

  @Column("float", { name: "SALCOEF", nullable: true, precision: 53 })
  salcoef: number | null;

  @Column("varchar", { name: "PURCODE", nullable: true, length: 10 })
  purcode: string | null;

  @Column("float", { name: "PURCOEF", nullable: true, precision: 53 })
  purcoef: number | null;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "1" })
  isactive: number;

  @Column("varchar", { name: "PURDESCR", nullable: true, length: 255 })
  purdescr: string | null;

  @Column("smallint", { name: "ISOFFICIAL", default: () => "0" })
  isofficial: number;

  @Column("datetime", { name: "STOPDATE", nullable: true })
  stopdate: Date | null;

  @OneToMany(
    () => Sxpcoefhist,
    (sxpcoefhist) => sxpcoefhist.sxprofitcoefsalcode2
  )
  sxpcoefhists: Sxpcoefhist[];

  @ManyToOne(
    () => Sxpcoefcategory,
    (sxpcoefcategory) => sxpcoefcategory.sxprofitcoefs
  )
  @JoinColumn([{ name: "SXPCOEFCATEGORYID", referencedColumnName: "codeid" }])
  sxpcoefcategory: Sxpcoefcategory;
}
