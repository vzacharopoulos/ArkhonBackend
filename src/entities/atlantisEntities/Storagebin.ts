import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Store } from "./Store";
import { Storetradelines } from "./Storetradelines";

@Index("UNI_308", ["comid", "stoid", "code"], { unique: true })
@Entity("STORAGEBIN", { schema: "dbo" })
export class Storagebin {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("varchar", { primary: true, name: "CODE", length: 25 })
  code: string;

  @Column("varchar", { name: "DESCR", nullable: true, length: 255 })
  descr: string | null;

  @Column("int", { primary: true, name: "STOID" })
  stoid: number;

  @Column("smallint", { name: "ISACTIVE", default: () => "(1)" })
  isactive: number;

  @ManyToOne(() => Store, (store) => store.storagebins)
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "STOID", referencedColumnName: "codeid" },
  ])
  store: Store;

  @OneToMany(
    () => Storetradelines,
    (storetradelines) => storetradelines.storagebin
  )
  storetradelines: Storetradelines[];
}
