import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RssNews } from "./RssNews";

@Index("UNI_6474", ["id"], { unique: true })
@Entity("RSS_LINKS", { schema: "dbo" })
export class RssLinks {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("int", { name: "PARENTID", nullable: true })
  parentid: number | null;

  @Column("int", { name: "DOMAINKIND", nullable: true })
  domainkind: number | null;

  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 200 })
  description: string | null;

  @Column("varchar", { name: "LINK", nullable: true, length: 200 })
  link: string | null;

  @Column("varchar", { name: "IMAGE", nullable: true, length: 200 })
  image: string | null;

  @Column("datetime", { name: "PUBDATE", nullable: true })
  pubdate: Date | null;

  @Column("datetime", { name: "LASTUPDATE", nullable: true })
  lastupdate: Date | null;

  @Column("varchar", { name: "SITELINK", nullable: true, length: 200 })
  sitelink: string | null;

  @Column("varchar", { name: "TITLE", nullable: true, length: 200 })
  title: string | null;

  @Column("int", { name: "USERID", nullable: true, default: () => "0" })
  userid: number | null;

  @Column("int", { name: "GROUPID", nullable: true, default: () => "0" })
  groupid: number | null;

  @Column("smallint", { name: "GDENABLE", default: () => "(0)" })
  gdenable: number;

  @OneToMany(() => RssNews, (rssNews) => rssNews.rssl)
  rssNews: RssNews[];
}
