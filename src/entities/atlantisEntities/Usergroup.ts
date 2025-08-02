import { Column, Entity, Index, OneToMany } from "typeorm";

@Index("UNI_202", ["codeid"], { unique: true })
@Entity("USERGROUP", { schema: "dbo" })
export class Usergroup {
  @Column("int", { primary: true, name: "CODEID" })
  codeid: number;

  @Column("varchar", { name: "DESCR", length: 30 })
  descr: string;

  @Column("int", { name: "OFPWDCH", nullable: true })
  ofpwdch: number | null;

  @Column("int", { name: "MINPWDLEN", nullable: true })
  minpwdlen: number | null;

  @Column("smallint", { name: "INGLNUM", nullable: true, default: () => "0" })
  inglnum: number | null;

  @Column("int", { name: "WARNDAYS", nullable: true })
  warndays: number | null;

  @Column("smallint", { name: "GDPR_SENSITIVE", default: () => "(1)" })
  gdprSensitive: number;

  @Column("varchar", { name: "GDPR_TABLES_RIGHTS", nullable: true, length: 30 })
  gdprTablesRights: string | null;

  @Column("varchar", { name: "GDPR_FIELDS_RIGHTS", nullable: true, length: 30 })
  gdprFieldsRights: string | null;

  @Column("smallint", { name: "GDPR_ENABLED_KIND", default: () => "(1)" })
  gdprEnabledKind: number;

  @Column("int", { name: "PASSWORDPOLICYID", nullable: true })
  passwordpolicyid: number | null;

  @Column("smallint", { name: "ISPORTALVISIBLEBYDEFAULT", nullable: true })
  isportalvisiblebydefault: number | null;

 
}
