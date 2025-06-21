import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql"; // Assuming you're using GraphQL


@ObjectType()
@Index("PK_PPORDERS", ["id"], { unique: true })
@Entity("PPORDERS", { schema: "dbo" })
export class Pporders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;



  @Field({ nullable: true })
  @Column("nvarchar", { name: "PPORDERNO", nullable: true, length: 100 })
  pporderno: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "CUSTPORDERNO", nullable: true, length: 100 })
  custporderno: string | null;

  @Field({ nullable: true })
  @Column("date", { name: "prodDate", nullable: true })
  prodDate: Date | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "up_date", nullable: true })
  upDate: Date | null;

  @Field({ nullable: true })
  @Column("date", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Field({ nullable: true })
  @Column("date", { name: "finish_date", nullable: true })
  finishDate: Date | null;

  @Field({ nullable: true })
  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Field({ nullable: true })
  @Column("bit", { name: "isCanceled", nullable: true })
  isCanceled: boolean | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "panelcode", nullable: true, length: 150 })
  panelcode: string | null;

  @Field({ nullable: true })
  @Column("nvarchar", { name: "tradecode", nullable: true, length: 100 })
  tradecode: string | null;

  @Field({ nullable: true })
  @Column("date", { name: "est_date_of_prod", nullable: true })
  estDateOfProd: Date | null;

  @Field({ nullable: true })
  @Column("date", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Field({ nullable: true })
  @Column("decimal", {
    name: "quantity",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  quantity: number | null;
}