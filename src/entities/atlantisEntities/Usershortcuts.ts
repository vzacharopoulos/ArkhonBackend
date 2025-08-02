import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Puser } from "./Puser";

@Index("UNI_6462", ["usrid", "actid"], { unique: true })
@Entity("USERSHORTCUTS", { schema: "dbo" })
export class Usershortcuts {
  @Column("int", { primary: true, name: "USRID" })
  usrid: number;

  @Column("smallint", { primary: true, name: "ACTID" })
  actid: number;

  @Column("int", { name: "USHORTCUT", nullable: true })
  ushortcut: number | null;

  @ManyToOne(() => Puser, (puser) => puser.usershortcuts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "USRID", referencedColumnName: "id" }])
  usr: Puser;
}
