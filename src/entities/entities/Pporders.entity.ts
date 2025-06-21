+10-9
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType, Int, Float } from "@nestjs/graphql";


@ObjectType()
@Index("PK_PPORDERS", ["id"], { unique: true })
@Entity("PPORDERS", { schema: "dbo" })
export class Pporders {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;



  @Field({ nullable: true })
  @Column("nvarchar", { name: "PPORDERNO", nullable: true, length: 100 })
  pporderno: string | null;



  @Field(() => Date, { nullable: true })
  @Column("date", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Field(() => Date, { nullable: true })
  @Column("date", { name: "finish_date", nullable: true })
  finishDate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "status", nullable: true })
  status: number | null;


  @Field({ nullable: true })
  @Column("nvarchar", { name: "panelcode", nullable: true, length: 150 })
  panelcode: string | null;



  @Field(() => Date, { nullable: true })
  @Column("date", { name: "est_date_of_prod", nullable: true })
  estDateOfProd: Date | null;

  @Field(() => Date, { nullable: true })
  @Column("date", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Field(() => Float, { nullable: true })
  @Column("decimal", {
    name: "quantity",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  quantity: number | null;
}