import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Documents } from "./Documents";

@Index("UNI_5726", ["id"], { unique: true })
@Entity("DOCREL", { schema: "dbo" })
export class Docrel {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("smallint", { name: "DOMAINTYPE" })
  domaintype: number;

  @Column("int", { name: "MASTERID" })
  masterid: number;

  @ManyToOne(() => Documents, (documents) => documents.docrels, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "DOCID", referencedColumnName: "id" }])
  doc: Documents;
}
