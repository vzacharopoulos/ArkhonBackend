import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RssLinks } from "./RssLinks.entity";

@Index("UNI_6476", ["id"], { unique: true })
@ObjectType()
@Entity("RSS_NEWS", { schema: "dbo" })
export class RssNews {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  @Field({ nullable: true })
  @Column("varchar", { name: "TITLE", nullable: true, length: 50 })
  title: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "LINK", nullable: true, length: 200 })
  link: string | null;

  @Field({ nullable: true })
  @Column("varchar", { name: "DESCRIPTION", nullable: true, length: 200 })
  description: string | null;

  @Field({ nullable: true })
  @Column("datetime", { name: "PUBDATE", nullable: true })
  pubdate: Date | null;

  @Field({ nullable: true })
  @Column("smallint", { name: "ISREAD", nullable: true })
  isread: number | null;

  @Field({ nullable: true })
  @ManyToOne(() => RssLinks, (rssLinks) => rssLinks.rssNews, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "RSSLID", referencedColumnName: "id" }])
  rssl: RssLinks;
}
