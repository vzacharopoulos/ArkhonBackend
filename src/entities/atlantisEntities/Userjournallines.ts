import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Acceventtype } from "./Acceventtype";
import { Userjournal } from "./Userjournal";

@Index("UNI_1006", ["comid", "usjid", "aetid"], { unique: true })
@Entity("USERJOURNALLINES", { schema: "dbo" })
export class Userjournallines {
  @Column("int", { primary: true, name: "AETID" })
  aetid: number;

  @Column("int", { primary: true, name: "USJID" })
  usjid: number;

  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @ManyToOne(
    () => Acceventtype,
    (acceventtype) => acceventtype.userjournallines
  )
  @JoinColumn([
    { name: "COMID", referencedColumnName: "comid" },
    { name: "AETID", referencedColumnName: "codeid" },
  ])
  acceventtype: Acceventtype;

  @ManyToOne(() => Userjournal, (userjournal) => userjournal.userjournallines, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Userjournal;
}
