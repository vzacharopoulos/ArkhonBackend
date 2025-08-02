import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Docforms } from "./Docforms";

@Index("UNI_1446_1", ["dfmid", "codeid", "domaintype"], { unique: true })
@Entity("USERVARDOCFORMSMESSAGES", { schema: "dbo" })
export class Uservardocformsmessages {
  @Column("int", { primary: true, name: "DFMID" })
  dfmid: number;

  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("varchar", { name: "MESSAGE", nullable: true, length: 255 })
  message: string | null;

  @Column("smallint", {
    primary: true,
    name: "DOMAINTYPE",
    default: () => "(1)",
  })
  domaintype: number;

  @ManyToOne(() => Docforms, (docforms) => docforms.uservardocformsmessages, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DFMID", referencedColumnName: "id" }])
  dfm: Docforms;
}
