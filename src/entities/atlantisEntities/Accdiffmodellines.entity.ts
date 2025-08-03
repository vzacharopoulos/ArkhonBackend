import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accdiffmodel } from "./Accdiffmodel.entity";

@Index("UNI_SX15468", ["id"], { unique: true })
@ObjectType()
@Entity("ACCDIFFMODELLINES", { schema: "dbo" })
export class Accdiffmodellines {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("datetime", { name: "FROMDATE" })
  fromdate: Date;

  @Column("float", { name: "COEF", precision: 53 })
  coef: number;

  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @ManyToOne(
    () => Accdiffmodel,
    (accdiffmodel) => accdiffmodel.accdiffmodellines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "ACCDIFFMODELID", referencedColumnName: "id" }])
  accdiffmodel: Accdiffmodel;
}
