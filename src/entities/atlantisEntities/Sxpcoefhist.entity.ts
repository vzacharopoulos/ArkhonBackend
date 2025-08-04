import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Sxprofitcoef } from "./Sxprofitcoef.entity";

@Index("UNI_15400", ["sxprofitcoefsalcode", "fyeid"], { unique: true })
@ObjectType()
@Entity("SXPCOEFHIST", { schema: "dbo" })
export class Sxpcoefhist {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "FYEID" })
  fyeid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "SXPROFITCOEFSALCODE", length: 10 })
  sxprofitcoefsalcode: string;

  @Field({ nullable: true })
  @Column("float", { name: "SALCOEF", nullable: true, precision: 53 })
  salcoef: number | null;

  @Field({ nullable: true })
  @Column("float", { name: "PURCOEF", nullable: true, precision: 53 })
  purcoef: number | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "COMMENTS", nullable: true, length: 255 })
  comments: string | null;

  @Field({ nullable: true })
  @ManyToOne(() => Sxprofitcoef, (sxprofitcoef) => sxprofitcoef.sxpcoefhists, {
    onDelete: "CASCADE",
  })
  @JoinColumn([
    { name: "SXPROFITCOEFSALCODE", referencedColumnName: "salcode" },
  ])
  sxprofitcoefsalcode2: Sxprofitcoef;
}
