import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Puser } from "./Puser";

@Index("UNI_5904", ["usrid", "comid", "braid"], { unique: true })
@Entity("USERLOGININFO", { schema: "dbo" })
export class Userlogininfo {
  @Column("int", { primary: true, name: "USRID" })
  usrid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("int", { primary: true, name: "BRAID", default: () => "0" })
  braid: number;

  @ManyToOne(() => Puser, (puser) => puser.userlogininfos, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "USRID", referencedColumnName: "id" }])
  usr: Puser;
}
