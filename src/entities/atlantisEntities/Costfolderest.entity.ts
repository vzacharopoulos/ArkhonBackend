import { ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Cost } from "./Cost.entity";
import { Costfolder } from "./Costfolder.entity";

@Index("UNI_5802", ["cfoid", "comid", "cstid"], { unique: true })
@ObjectType()
@Entity("COSTFOLDEREST", { schema: "dbo" })
export class Costfolderest {
  @Column("int", { primary: true, name: "CFOID" })
  cfoid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "CSTID" })
  cstid: number;

  @Column("float", { name: "LVALUEEST", nullable: true, precision: 53 })
  lvalueest: number | null;

  @ManyToOne(() => Cost, (cost) => cost.costfolderests)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "CSTID", referencedColumnName: "codeid" },
    { name: "DOMAINTYPE", referencedColumnName: "domaintype" },
  ])
  cost: Cost;

  @ManyToOne(() => Costfolder, (costfolder) => costfolder.costfolderests, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "CFOID", referencedColumnName: "id" }])
  cfo: Costfolder;
}
