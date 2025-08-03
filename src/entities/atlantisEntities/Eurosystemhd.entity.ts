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
import { Eurosystemck } from "./Eurosystemck.entity";
import { Eurosystemdt } from "./Eurosystemdt.entity";
import { Company } from "./Company.entity";

@Index("UNI_18188", ["id"], { unique: true })
@Index("UNI_18200", ["code", "comid", "fyeid"], { unique: true })
@ObjectType()
@Entity("EUROSYSTEMHD", { schema: "dbo" })
export class Eurosystemhd {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "COMID", unique: true })
  comid: number;

  @Column("int", { name: "FYEID", unique: true })
  fyeid: number;

  @Column("varchar", { name: "CODE", unique: true, length: 25 })
  code: string;

  @Column("smallint", { name: "CATEGORYID" })
  categoryid: number;

  @Column("varchar", { name: "CATEGORY", nullable: true, length: 50 })
  category: string | null;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("smallint", { name: "PREVYEARAMOUNTS", default: () => "(0)" })
  prevyearamounts: number;

  @Column("int", { name: "DOCFORMSCODEID", nullable: true })
  docformscodeid: number | null;

  @Column("smallint", { name: "DOCFORMSDOMAINTYPE", nullable: true })
  docformsdomaintype: number | null;

  @OneToMany(() => Eurosystemck, (eurosystemck) => eurosystemck.eshd)
  eurosystemcks: Eurosystemck[];

  @OneToMany(() => Eurosystemdt, (eurosystemdt) => eurosystemdt.eshd)
  eurosystemdts: Eurosystemdt[];

  @ManyToOne(() => Company, (company) => company.eurosystemhds, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;


}
