import { Field } from "@nestjs/graphql";
import { Column, Entity, Index, OneToMany } from "typeorm";
import { Assetorginfo } from "./Assetorginfo.entity";
import { ObjectType } from "@nestjs/graphql";
@ObjectType()
@Index("UNI_5624", ["comid", "codeid"], { unique: true })
@Entity("DEPARTMENT", { schema: "dbo" })
export class Department {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Field(() => [Assetorginfo], { nullable: true })
  @OneToMany(() => Assetorginfo, (assetorginfo) => assetorginfo.department)
  assetorginfos: Assetorginfo[];
}
