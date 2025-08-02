import { Column, Entity, Index } from "typeorm";

@Index("UNI_1112", ["name"], { unique: true })
@Entity("EXTRARESOLVERS", { schema: "dbo" })
export class Extraresolvers {
  @Column("varchar", { primary: true, name: "NAME", length: 10 })
  name: string;

  @Column("varchar", { name: "DESCR", length: 50 })
  descr: string;

  @Column("varchar", { name: "TABLENAME", length: 50 })
  tablename: string;

  @Column("varchar", { name: "KEYNAME", length: 50 })
  keyname: string;

  @Column("varchar", { name: "FIELDNAME", length: 50 })
  fieldname: string;

  @Column("int", { name: "KEYTYPE" })
  keytype: number;

  @Column("int", { name: "ISPERMANENT", default: () => "(0)" })
  ispermanent: number;

  @Column("int", { name: "USECOMID", default: () => "(0)" })
  usecomid: number;

  @Column("varchar", { name: "EXTRAWHERE", nullable: true, length: 100 })
  extrawhere: string | null;

  @Column("varchar", { name: "DOMAINTYPES", nullable: true, length: 50 })
  domaintypes: string | null;

  @Column("int", { name: "RESOLVERKIND", default: () => "(0)" })
  resolverkind: number;
}
