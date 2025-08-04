import { ObjectType, Field, Int, Float } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customer.entity";
import { Salesman } from "./Salesman.entity";
import { ProdOrdersView } from "../views/PanelProductionOrdersExt2.view";

@ObjectType()
@Index("PK_STORETRADELINES_SYNC", ["id"], { unique: true })
@Entity("FINTRADE_SYNC", { schema: "dbo" })


export class FintradeSync {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "APPROVED", nullable: true })
  approved: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "COMID", nullable: true })
  comid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "DSRID", nullable: true })
  dsrid: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DSRNUMBER", nullable: true, length: 30 })
  dsrnumber: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "FTRDATE", nullable: true })
  ftrdate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "ISCANCELED", nullable: true })
  iscanceled: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "TRADECODE", nullable: true, length: 30 })
  tradecode: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "CUSID", nullable: true })
  cusid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "COLIDSALESMAN", nullable: true })
  colidsalesman: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "salesmanoffice", nullable: true })
  salesmanoffice: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "FDTID", nullable: true })
  fdtid: number | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "LASTUPDATE", nullable: true })
  lastupdate: Date | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "ZUNDERPRODUCTION", nullable: true })
  zunderproduction: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "ZINCOMPLETE", nullable: true })
  zincomplete: number | null;

  @Field(() => Int, { nullable: true })
  @Column("smallint", { name: "ZFINISHED", nullable: true })
  zfinished: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Field({ nullable: true })
  @Column("text", { name: "Justification", nullable: true })
  justification: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "SecJustification", nullable: true })
  secJustification: string | null;

  @Field({ nullable: true })
  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "isTemp", nullable: true })
  isTemp: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "isPrinted", nullable: true, default: () => "(0)" })
  isPrinted: number | null;

  @Field({ nullable: true })
  @Column("nchar", { name: "username", nullable: true, length: 50 })
  username: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "SUPID", nullable: true })
  supid: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "status2", nullable: true })
  status2: number | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "isToLoad", nullable: true })
  isToLoad: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "arkhonmesuser", nullable: true, length: 50 })
  arkhonmesuser: string | null;

  @Field(() => Int, { nullable: true })
  @Column("int", { name: "nofcorrections", nullable: true, default: () => "(0)" })
  nofcorrections: number | null;

  @Field(() => Customer, { nullable: true })  // <-- ADD THIS LINE!
   @ManyToOne(() => Customer, (customer) => customer.fintradeSyncs)
  @JoinColumn([{ name: "CUSID", referencedColumnName: "id" }])
  cus: Customer;

    @Field({ nullable: true })
    @ManyToOne(() => Salesman, (salesman) => salesman.fintradeSync)
    @JoinColumn([{ name: "COLIDSALESMAN", referencedColumnName: "id" }])
    salesman: Salesman;

//     @Field(() => [ProdOrdersView], { nullable: true })
// @OneToMany(
//   () => ProdOrdersView,
//   prodOrdersView => prodOrdersView.fintradeSync, // see next step!
//   { nullable: true }
// )
// prodOrdersViews?: ProdOrdersView[];

}

