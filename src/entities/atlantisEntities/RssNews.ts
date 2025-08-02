import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RssLinks } from "./RssLinks";

@Index("UNI_6476", ["id"], { unique: true })
@Entity("RSS_NEWS", { schema: "dbo" })
export class RssNews {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Column("varchar", { name: "TITLE", nullable: true, length: 50 })
  title: string | null;

  @Column("varchar", { name: "LINK", nullable: true, length: 200 })
  link: string | null;

  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 200 })
  description: string | null;

  @Column("datetime", { name: "PUBDATE", nullable: true })
  pubdate: Date | null;

  @Column("smallint", { name: "ISREAD", nullable: true })
  isread: number | null;

  @ManyToOne(() => RssLinks, (rssLinks) => rssLinks.rssNews, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "RSSLID", referencedColumnName: "id" }])
  rssl: RssLinks;
}
