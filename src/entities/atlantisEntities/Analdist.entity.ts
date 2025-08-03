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
import { Account } from "./Account.entity";
import { Acceventtype } from "./Acceventtype.entity";
import { Company } from "./Company.entity";
import { Analdistlines } from "./Analdistlines.entity";
import { Comtradelines } from "./Comtradelines.entity";

@Index("UNI_706", ["id"], { unique: true })
@Index("UNI_728", ["comid", "code"], { unique: true })
@ObjectType()
@Entity("ANALDIST", { schema: "dbo" })
export class Analdist {
  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @Column("smallint", { name: "ATYPE", default: () => "0" })
  atype: number;

  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Column("smallint", { name: "DMODE", default: () => "0" })
  dmode: number;

  @Column("int", { name: "DLPDSRID", nullable: true })
  dlpdsrid: number | null;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @OneToMany(() => Account, (account) => account.ads)
  accounts: Account[];

  @ManyToOne(() => Acceventtype, (acceventtype) => acceventtype.analdists)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @ManyToOne(() => Company, (company) => company.analdists)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @OneToMany(() => Analdistlines, (analdistlines) => analdistlines.ads)
  analdistlines: Analdistlines[];

  @OneToMany(() => Comtradelines, (comtradelines) => comtradelines.analdist)
  comtradelines: Comtradelines[];
}
