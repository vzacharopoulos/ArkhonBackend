import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Field, ObjectType, Int, ID } from "@nestjs/graphql";
import { Pporders } from "./Pporders.entity";


@ObjectType()
@Entity("PanelMachinePauses", { schema: "dbo" })
export class PanelMachinePauses {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  @Field(() => ID)
  id: number;

  @Column("int", { name: "pporderid" })
  @Field(() => Int)
  pporderid: number;

  @Column("datetime", { name: "pausestartdate" })
  @Field()
  pausestartdate: Date;

  @Column("datetime", { name: "pauseenddate", nullable: true })
  @Field({ nullable: true })
  pauseenddate?: Date;

  @Column("int", { name: "pauseduration", nullable: true })
  @Field(() => Int, { nullable: true })
  pauseduration?: number;

  @Column("nvarchar", { name: "pausecomment", nullable: true, length: 100 })
  @Field({ nullable: true })
  pausecomment?: string;

  @ManyToOne(() => Pporders, (order) => order.pauses)
  @JoinColumn({ name: "pporderid" })
  @Field(() => Pporders)
  order: Pporders;
}