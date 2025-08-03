import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Eurosystemhd } from "./Eurosystemhd.entity";

@Index("UNI_18234", ["id"], { unique: true })
@ObjectType()
@Entity("EUROSYSTEMCK", { schema: "dbo" })
export class Eurosystemck {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "EXPRESSION" })
  expression: string;

  @ManyToOne(() => Eurosystemhd, (eurosystemhd) => eurosystemhd.eurosystemcks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ESHDID", referencedColumnName: "id" }])
  eshd: Eurosystemhd;
}
