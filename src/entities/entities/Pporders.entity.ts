+10-9
import { Column, Entity, Index, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType, Int, Float } from "@nestjs/graphql";
import { Pporderlines2 } from "./Pporderlines2.entity";


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

  @Field(() => Date, { nullable: true })
  @Column("datetime", { name: "start_date_datetime", nullable: true })
  startDateDatetime: Date | null;

    @Field(() => Date, { nullable: true })
  @Column("datetime", { name: "finish_date_datetime", nullable: true })
  finishDateDatetime: Date | null;   @Field(() => Date, { nullable: true })

  @Column("datetime", { name: "est_date_of_prod_datetime", nullable: true })
  estDateOfProdDatetime: Date | null;

@Field(() => [Pporderlines2], { nullable: true })
  @OneToMany(() => Pporderlines2,pporderline => pporderline.pporderno)
  
    
   pporderlines?: Pporderlines2 | null;
}
