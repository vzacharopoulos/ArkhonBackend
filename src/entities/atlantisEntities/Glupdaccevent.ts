import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Glupdatestruct } from "./Glupdatestruct";
import { Glupdacceventlines } from "./Glupdacceventlines";

@Index("UNI_5370", ["comid", "domaintype", "gusid", "linenum"], {
  unique: true,
})
@Index("UNI_5374", ["id"], { unique: true })
@Entity("GLUPDACCEVENT", { schema: "dbo" })
export class Glupdaccevent {
  @Column("int", { primary: true, name: "COMID" })
  comid: number;

  @Column("smallint", { primary: true, name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { primary: true, name: "GUSID" })
  gusid: number;

  @Column("smallint", { primary: true, name: "LINENUM" })
  linenum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "DESCR", length: 255 })
  descr: string;

  @Column("int", { name: "DSRID" })
  dsrid: number;

  @Column("varchar", { name: "JUSTIFICATION", nullable: true, length: 255 })
  justification: string | null;

  @ManyToOne(
    () => Glupdatestruct,
    (glupdatestruct) => glupdatestruct.glupdaccevents,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "LINKID", referencedColumnName: "id" }])
  link: Glupdatestruct;

  @OneToMany(
    () => Glupdacceventlines,
    (glupdacceventlines) => glupdacceventlines.link
  )
  glupdacceventlines: Glupdacceventlines[];
}
