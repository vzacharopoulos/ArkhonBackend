import { Field } from "@nestjs/graphql";
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

  @Field({ nullable: true })
  @Column("datetime", { name: "FROMDATE" })
  fromdate: Date;

  @Field({ nullable: true })
  @Column("float", { name: "COEF", precision: 53 })
  coef: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @ManyToOne(
    () => Accdiffmodel,
    (accdiffmodel) => accdiffmodel.accdiffmodellines,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "ACCDIFFMODELID", referencedColumnName: "id" }])
  accdiffmodel: Accdiffmodel;
}
