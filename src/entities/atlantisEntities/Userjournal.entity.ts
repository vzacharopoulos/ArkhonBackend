import { Field } from "@nestjs/graphql";
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
import { Company } from "./Company.entity";
import { Userjournallines } from "./Userjournallines.entity";

@Index("UNI_1000", ["comid", "codeid"], { unique: true })
@Index("UNI_1018", ["id"], { unique: true })
@ObjectType()
@Entity("USERJOURNAL", { schema: "dbo" })
export class Userjournal {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID"})
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE", length: 255 })
  title: string;

  @Field({ nullable: true })
  @ManyToOne(() => Company, (company) => company.userjournals)
  @JoinColumn([{ name: "COMID", referencedColumnName: "codeid" }])
  com: Company;

  @Field(() => [Userjournallines], { nullable: true })
  @OneToMany(
    () => Userjournallines,
    (userjournallines) => userjournallines.link
  )
  userjournallines: Userjournallines[];
}
