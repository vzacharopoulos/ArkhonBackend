import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cost } from "./Cost.entity";
import { Costfolder } from "./Costfolder.entity";

@Index("UNI_5802", ["cfoid", "comid", "cstid"], { unique: true })
@ObjectType()
@Entity("COSTFOLDEREST", { schema: "dbo" })
export class Costfolderest {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CFOID" })
  cfoid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CSTID" })
  cstid: number;

  @Field({ nullable: true })
  @Column("float", { name: "LVALUEEST", nullable: true, precision: 53 })
  lvalueest: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => Cost, (cost) => cost.costfolderests)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CSTID", referencedColumnName: "codeid" },
    { name: "DOMAINTYPE", referencedColumnName: "domaintype" },
  ])
  cost: Cost;

  @Field({ nullable: true })
  @ManyToOne(() => Costfolder, (costfolder) => costfolder.costfolderests, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "CFOID", referencedColumnName: "id" }])
  cfo: Costfolder;
}
