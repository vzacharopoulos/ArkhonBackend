import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Store } from "./Store.entity";
import { Storetradelines } from "./Storetradelines.entity";

@Index("UNI_308", ["comid", "stoid", "code"], { unique: true })
@ObjectType()
@Entity("STORAGEBIN", { schema: "dbo" })
export class Storagebin {
  @Field({ nullable: true })
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Field({ nullable: true })
  @Column("varchar", { primary: true, name: "CODE", length: 25 })
  code: string;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Field({ nullable: true })
  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @Field({ nullable: true })
  @ManyToOne(() => Store, (store) => store.storagebins)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOID", referencedColumnName: "codeid" },
  ])
  store: Store;

  @Field(() => [Storetradelines], { nullable: true })
  @OneToMany(
    () => Storetradelines,
    (storetradelines) => storetradelines.storagebin
  )
  storetradelines: Storetradelines[];
}
